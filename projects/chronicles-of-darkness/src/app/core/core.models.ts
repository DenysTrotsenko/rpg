export interface User {
  username: string;
  permissions: {
    admin?: boolean;
    user?: boolean;
  };
}
