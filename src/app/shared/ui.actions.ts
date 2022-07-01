import { createAction } from '@ngrx/store';

export const isLoading = createAction('[UI Counter Component] Is Loading');
export const stopLoading = createAction('[UI Counter Component] Stop Loading');