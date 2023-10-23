export function success(data:any) {
  return {
    message: `Success: ${data.message}`,
    data: data.data,
    status: true,
  };
}
export function failure(data:any) {
  return {
    message: `Failure: ${data.message}`,
    status: false,
  };
}