import { z } from 'zod';

import dbSchema from './db.schema';

export const videoSchema = dbSchema.extend({
 title: z.string().min(1, 'Title is required').max(255, 'Title cannot exceed 255 characters'),
 description: z.string().max(1000, 'Description cannot exceed 1000 characters').optional(),
 url: z.string().url('Invalid URL format').optional(),
 streamId: z.string().min(1, 'Stream ID is required').optional(),
 status: z.enum(['processing', 'completed', 'failed']),
 data: z.any().optional().nullable(),
}).strip();