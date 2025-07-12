export enum UserRoleEnums {
  Owner = 1,
  Admin = 2,
  Supporter = 3,
}

export const USER_ROLES = {
  Owner: UserRoleEnums.Owner,
  Admin: UserRoleEnums.Admin,
  Supporter: UserRoleEnums.Supporter,
};

export enum SubscriptionEnums {
  Free = 1,
  Whitelabel = 2,
  Platinum = 3,
  Custom = 4,
}
export const SUBSCRIPTIONS = {
  Free: SubscriptionEnums.Free,
  Whitelabel: SubscriptionEnums.Whitelabel,
  Platinum: SubscriptionEnums.Platinum,
  Custom: SubscriptionEnums.Custom,
};
