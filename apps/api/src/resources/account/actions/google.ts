// import { userService } from 'resources/user';

// import { authService, googleService } from 'services';

// import config from 'config';

// import { AppKoaContext, AppRouter } from 'types';

// const getOAuthUrl = async (ctx: AppKoaContext) => {
//   const areCredentialsExist = config.GOOGLE_CLIENT_ID && config.GOOGLE_CLIENT_SECRET;

//   ctx.assertClientError(areCredentialsExist, {
//     global: 'Setup Google OAuth credentials on API',
//   });

//   console.log('sss ', googleService.oAuthURL);

//   ctx.redirect(googleService.oAuthURL);
// };

// const signInGoogleWithCode = async (ctx: AppKoaContext) => {
//   const { code } = ctx.request.query;

//   const { isValid, payload } = await googleService.exchangeCodeForToken(code);

//   ctx.assertError(isValid && payload && !(payload instanceof Error), `Exchange code for token error: ${payload}`);

//   const user = await userService.findOne({ email: payload.email }, { skipDeletedOnDocs: false });
//   let userChanged;

//   const { givenName: firstName, familyName, email, picture: avatarUrl } = payload;

//   const lastName = familyName || '';
//   const fullName = lastName.length && firstName?.length ? `${firstName} ${lastName}` : '';

//   if (user) {
//     userChanged = await userService.updateOne({ _id: user._id }, (old) => ({
//       ...old,
//       firstName,
//       lastName,
//       fullName,
//       avatarUrl: old.avatarUrl || avatarUrl,
//       oauth: { google: true },
//     }));

//     const userUpdated = userChanged || user;

//     await Promise.all([userService.updateLastRequest(userUpdated._id), authService.setTokens(ctx, userUpdated._id)]);

//     return ctx.redirect(config.WEB_URL);
//   }

//   const newUser = await userService.insertOne({
//     firstName,
//     lastName,
//     fullName,
//     email,
//     isEmailVerified: true,
//     avatarUrl,
//     oauth: {
//       google: true,
//     },
//   });

//   if (newUser) {
//     console.log('test')
//     await Promise.all([userService.updateLastRequest(newUser._id), authService.setTokens(ctx, newUser._id)]);
//   }

//   ctx.redirect(config.WEB_URL);
// };

// export default (router: AppRouter) => {
//   router.get('/sign-in/google/auth', getOAuthUrl);
//   router.get('/sign-in/google', signInGoogleWithCode);
// };
