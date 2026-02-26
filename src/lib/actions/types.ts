export type ActionResult<T = unknown> = {
  success: boolean;
  error?: string;
  data?: T;
};

export type SuccessResult<T> = ActionResult<T> & { success: true; data: T };
export type ErrorResult = ActionResult & { success: false; error: string };