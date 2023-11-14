// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: URL | string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** Represents date values */
  Date: string;
  /** Represents NULL values */
  Void: void;
  QueryDatabaseString1People: any;
};

export type Query = {
  page?: Maybe<Page>;
  database?: Maybe<Database>;
};


export type QuerypageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerydatabaseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['DateTime']>;
  lastEditedTime?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<QueryPageCreatedBy>;
  lastEditedBy?: Maybe<QueryPageCreatedBy>;
  cover?: Maybe<QueryPageCover>;
  icon?: Maybe<QueryPageIcon>;
  parent?: Maybe<QueryPageParent>;
  archived?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<QueryPage>;
  url?: Maybe<Scalars['URL']>;
  publicUrl?: Maybe<Scalars['Void']>;
};

export type QueryPageCreatedBy = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type QueryPageCover = {
  type?: Maybe<Scalars['String']>;
  external?: Maybe<QueryPageCoverExternal>;
};

export type QueryPageCoverExternal = {
  url?: Maybe<Scalars['URL']>;
};

export type QueryPageIcon = {
  type?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type QueryPageParent = {
  type?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['String']>;
};

export type QueryPage = {
  storeAvailability?: Maybe<QueryPageStoreAvailability>;
  foodGroup?: Maybe<QueryPageFoodGroup>;
  price?: Maybe<QueryPagePrice>;
  responsiblePerson?: Maybe<QueryPageResponsiblePerson>;
  lastOrdered?: Maybe<QueryPageLastOrdered>;
  costOfNextTrip?: Maybe<QueryPageCostOfNextTrip>;
  recipes?: Maybe<QueryPageRecipes>;
  description?: Maybe<QueryPageDescription>;
  inStock?: Maybe<QueryPageInStock>;
  numberOfMeals?: Maybe<QueryPageNumberOfMeals>;
  photo?: Maybe<QueryPagePhoto>;
  name?: Maybe<QueryPageName>;
};

export type QueryPageStoreAvailability = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multiSelect?: Maybe<Array<Maybe<QueryPageStoreAvailabilityMultiSelectItems>>>;
};

export type QueryPageStoreAvailabilityMultiSelectItems = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type QueryPageFoodGroup = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  select?: Maybe<QueryPageFoodGroupSelect>;
};

export type QueryPageFoodGroupSelect = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type QueryPagePrice = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
};

export type QueryPageResponsiblePerson = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Maybe<QueryPageResponsiblePersonPeopleItems>>>;
};

export type QueryPageResponsiblePersonPeopleItems = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['URL']>;
  type?: Maybe<Scalars['String']>;
  person?: Maybe<QueryPageResponsiblePersonPeopleItemsPerson>;
};

export type QueryPageResponsiblePersonPeopleItemsPerson = {
  email?: Maybe<Scalars['EmailAddress']>;
};

export type QueryPageLastOrdered = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<QueryPageLastOrderedDate>;
};

export type QueryPageLastOrderedDate = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Void']>;
  timeZone?: Maybe<Scalars['Void']>;
};

export type QueryPageCostOfNextTrip = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  formula?: Maybe<QueryPageCostOfNextTripFormula>;
};

export type QueryPageCostOfNextTripFormula = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type QueryPageRecipes = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  relation?: Maybe<Array<Maybe<QueryPageRecipesRelationItems>>>;
  hasMore?: Maybe<Scalars['Boolean']>;
};

export type QueryPageRecipesRelationItems = {
  id?: Maybe<Scalars['String']>;
};

export type QueryPageDescription = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  richText?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
};

export type QueryPageDescriptionRichTextItems = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<QueryPageDescriptionRichTextItemsText>;
  annotations?: Maybe<QueryPageDescriptionRichTextItemsAnnotations>;
  plainText?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['Void']>;
};

export type QueryPageDescriptionRichTextItemsText = {
  content?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['Void']>;
};

export type QueryPageDescriptionRichTextItemsAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type QueryPageInStock = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  checkbox?: Maybe<Scalars['Boolean']>;
};

export type QueryPageNumberOfMeals = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rollup?: Maybe<QueryPageNumberOfMealsRollup>;
};

export type QueryPageNumberOfMealsRollup = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  function?: Maybe<Scalars['String']>;
};

export type QueryPagePhoto = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URL']>;
};

export type QueryPageName = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
};

export type Database = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['DateTime']>;
  lastEditedTime?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<QueryPageIcon>;
  cover?: Maybe<QueryPageCover>;
  url?: Maybe<Scalars['URL']>;
  title?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
  description?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
  properties?: Maybe<QueryDatabase>;
  parent?: Maybe<QueryDatabaseParent>;
  archived?: Maybe<Scalars['Boolean']>;
  isInline?: Maybe<Scalars['Boolean']>;
  publicUrl?: Maybe<Scalars['Void']>;
};

export type QueryDatabase = {
  string1?: Maybe<QueryDatabaseString1>;
  inStock?: Maybe<QueryDatabaseInStock>;
  price?: Maybe<QueryDatabasePrice>;
  description?: Maybe<QueryDatabaseDescription>;
  lastOrdered?: Maybe<QueryDatabaseLastOrdered>;
  meals?: Maybe<QueryDatabaseMeals>;
  numberOfMeals?: Maybe<QueryDatabaseNumberOfMeals>;
  storeAvailability?: Maybe<QueryDatabaseStoreAvailability>;
  photo?: Maybe<QueryDatabasePhoto>;
  foodGroup?: Maybe<QueryDatabaseFoodGroup>;
  name?: Maybe<QueryDatabaseName>;
};

export type QueryDatabaseString1 = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  people?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseInStock = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  checkbox?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabasePrice = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  number?: Maybe<QueryDatabasePriceNumber>;
};

export type QueryDatabasePriceNumber = {
  format?: Maybe<Scalars['String']>;
};

export type QueryDatabaseDescription = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  richText?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseLastOrdered = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseMeals = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  relation?: Maybe<QueryDatabaseMealsRelation>;
};

export type QueryDatabaseMealsRelation = {
  databaseId?: Maybe<Scalars['String']>;
  syncedPropertyName?: Maybe<Scalars['String']>;
};

export type QueryDatabaseNumberOfMeals = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rollup?: Maybe<QueryDatabaseNumberOfMealsRollup>;
};

export type QueryDatabaseNumberOfMealsRollup = {
  rollupPropertyName?: Maybe<Scalars['String']>;
  relationPropertyName?: Maybe<Scalars['String']>;
  rollupPropertyId?: Maybe<Scalars['String']>;
  relationPropertyId?: Maybe<Scalars['String']>;
  function?: Maybe<Scalars['String']>;
};

export type QueryDatabaseStoreAvailability = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multiSelect?: Maybe<QueryDatabaseStoreAvailabilityMultiSelect>;
};

export type QueryDatabaseStoreAvailabilityMultiSelect = {
  options?: Maybe<Array<Maybe<QueryPageStoreAvailabilityMultiSelectItems>>>;
};

export type QueryDatabasePhoto = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseFoodGroup = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  select?: Maybe<QueryDatabaseStoreAvailabilityMultiSelect>;
};

export type QueryDatabaseName = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseParent = {
  type?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Page: ResolverTypeWrapper<Page>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  QueryPageCreatedBy: ResolverTypeWrapper<QueryPageCreatedBy>;
  QueryPageCover: ResolverTypeWrapper<QueryPageCover>;
  QueryPageCoverExternal: ResolverTypeWrapper<QueryPageCoverExternal>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  QueryPageIcon: ResolverTypeWrapper<QueryPageIcon>;
  QueryPageParent: ResolverTypeWrapper<QueryPageParent>;
  QueryPage: ResolverTypeWrapper<QueryPage>;
  QueryPageStoreAvailability: ResolverTypeWrapper<QueryPageStoreAvailability>;
  QueryPageStoreAvailabilityMultiSelectItems: ResolverTypeWrapper<QueryPageStoreAvailabilityMultiSelectItems>;
  QueryPageFoodGroup: ResolverTypeWrapper<QueryPageFoodGroup>;
  QueryPageFoodGroupSelect: ResolverTypeWrapper<QueryPageFoodGroupSelect>;
  QueryPagePrice: ResolverTypeWrapper<QueryPagePrice>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  QueryPageResponsiblePerson: ResolverTypeWrapper<QueryPageResponsiblePerson>;
  QueryPageResponsiblePersonPeopleItems: ResolverTypeWrapper<QueryPageResponsiblePersonPeopleItems>;
  QueryPageResponsiblePersonPeopleItemsPerson: ResolverTypeWrapper<QueryPageResponsiblePersonPeopleItemsPerson>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  QueryPageLastOrdered: ResolverTypeWrapper<QueryPageLastOrdered>;
  QueryPageLastOrderedDate: ResolverTypeWrapper<QueryPageLastOrderedDate>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  QueryPageCostOfNextTrip: ResolverTypeWrapper<QueryPageCostOfNextTrip>;
  QueryPageCostOfNextTripFormula: ResolverTypeWrapper<QueryPageCostOfNextTripFormula>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  QueryPageRecipes: ResolverTypeWrapper<QueryPageRecipes>;
  QueryPageRecipesRelationItems: ResolverTypeWrapper<QueryPageRecipesRelationItems>;
  QueryPageDescription: ResolverTypeWrapper<QueryPageDescription>;
  QueryPageDescriptionRichTextItems: ResolverTypeWrapper<QueryPageDescriptionRichTextItems>;
  QueryPageDescriptionRichTextItemsText: ResolverTypeWrapper<QueryPageDescriptionRichTextItemsText>;
  QueryPageDescriptionRichTextItemsAnnotations: ResolverTypeWrapper<QueryPageDescriptionRichTextItemsAnnotations>;
  QueryPageInStock: ResolverTypeWrapper<QueryPageInStock>;
  QueryPageNumberOfMeals: ResolverTypeWrapper<QueryPageNumberOfMeals>;
  QueryPageNumberOfMealsRollup: ResolverTypeWrapper<QueryPageNumberOfMealsRollup>;
  QueryPagePhoto: ResolverTypeWrapper<QueryPagePhoto>;
  QueryPageName: ResolverTypeWrapper<QueryPageName>;
  Database: ResolverTypeWrapper<Database>;
  QueryDatabase: ResolverTypeWrapper<QueryDatabase>;
  QueryDatabaseString1: ResolverTypeWrapper<QueryDatabaseString1>;
  QueryDatabaseString1People: ResolverTypeWrapper<Scalars['QueryDatabaseString1People']>;
  QueryDatabaseInStock: ResolverTypeWrapper<QueryDatabaseInStock>;
  QueryDatabasePrice: ResolverTypeWrapper<QueryDatabasePrice>;
  QueryDatabasePriceNumber: ResolverTypeWrapper<QueryDatabasePriceNumber>;
  QueryDatabaseDescription: ResolverTypeWrapper<QueryDatabaseDescription>;
  QueryDatabaseLastOrdered: ResolverTypeWrapper<QueryDatabaseLastOrdered>;
  QueryDatabaseMeals: ResolverTypeWrapper<QueryDatabaseMeals>;
  QueryDatabaseMealsRelation: ResolverTypeWrapper<QueryDatabaseMealsRelation>;
  QueryDatabaseNumberOfMeals: ResolverTypeWrapper<QueryDatabaseNumberOfMeals>;
  QueryDatabaseNumberOfMealsRollup: ResolverTypeWrapper<QueryDatabaseNumberOfMealsRollup>;
  QueryDatabaseStoreAvailability: ResolverTypeWrapper<QueryDatabaseStoreAvailability>;
  QueryDatabaseStoreAvailabilityMultiSelect: ResolverTypeWrapper<QueryDatabaseStoreAvailabilityMultiSelect>;
  QueryDatabasePhoto: ResolverTypeWrapper<QueryDatabasePhoto>;
  QueryDatabaseFoodGroup: ResolverTypeWrapper<QueryDatabaseFoodGroup>;
  QueryDatabaseName: ResolverTypeWrapper<QueryDatabaseName>;
  QueryDatabaseParent: ResolverTypeWrapper<QueryDatabaseParent>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars['ID'];
  Page: Page;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  QueryPageCreatedBy: QueryPageCreatedBy;
  QueryPageCover: QueryPageCover;
  QueryPageCoverExternal: QueryPageCoverExternal;
  URL: Scalars['URL'];
  QueryPageIcon: QueryPageIcon;
  QueryPageParent: QueryPageParent;
  QueryPage: QueryPage;
  QueryPageStoreAvailability: QueryPageStoreAvailability;
  QueryPageStoreAvailabilityMultiSelectItems: QueryPageStoreAvailabilityMultiSelectItems;
  QueryPageFoodGroup: QueryPageFoodGroup;
  QueryPageFoodGroupSelect: QueryPageFoodGroupSelect;
  QueryPagePrice: QueryPagePrice;
  Float: Scalars['Float'];
  QueryPageResponsiblePerson: QueryPageResponsiblePerson;
  QueryPageResponsiblePersonPeopleItems: QueryPageResponsiblePersonPeopleItems;
  QueryPageResponsiblePersonPeopleItemsPerson: QueryPageResponsiblePersonPeopleItemsPerson;
  EmailAddress: Scalars['EmailAddress'];
  QueryPageLastOrdered: QueryPageLastOrdered;
  QueryPageLastOrderedDate: QueryPageLastOrderedDate;
  Date: Scalars['Date'];
  Void: Scalars['Void'];
  QueryPageCostOfNextTrip: QueryPageCostOfNextTrip;
  QueryPageCostOfNextTripFormula: QueryPageCostOfNextTripFormula;
  Int: Scalars['Int'];
  QueryPageRecipes: QueryPageRecipes;
  QueryPageRecipesRelationItems: QueryPageRecipesRelationItems;
  QueryPageDescription: QueryPageDescription;
  QueryPageDescriptionRichTextItems: QueryPageDescriptionRichTextItems;
  QueryPageDescriptionRichTextItemsText: QueryPageDescriptionRichTextItemsText;
  QueryPageDescriptionRichTextItemsAnnotations: QueryPageDescriptionRichTextItemsAnnotations;
  QueryPageInStock: QueryPageInStock;
  QueryPageNumberOfMeals: QueryPageNumberOfMeals;
  QueryPageNumberOfMealsRollup: QueryPageNumberOfMealsRollup;
  QueryPagePhoto: QueryPagePhoto;
  QueryPageName: QueryPageName;
  Database: Database;
  QueryDatabase: QueryDatabase;
  QueryDatabaseString1: QueryDatabaseString1;
  QueryDatabaseString1People: Scalars['QueryDatabaseString1People'];
  QueryDatabaseInStock: QueryDatabaseInStock;
  QueryDatabasePrice: QueryDatabasePrice;
  QueryDatabasePriceNumber: QueryDatabasePriceNumber;
  QueryDatabaseDescription: QueryDatabaseDescription;
  QueryDatabaseLastOrdered: QueryDatabaseLastOrdered;
  QueryDatabaseMeals: QueryDatabaseMeals;
  QueryDatabaseMealsRelation: QueryDatabaseMealsRelation;
  QueryDatabaseNumberOfMeals: QueryDatabaseNumberOfMeals;
  QueryDatabaseNumberOfMealsRollup: QueryDatabaseNumberOfMealsRollup;
  QueryDatabaseStoreAvailability: QueryDatabaseStoreAvailability;
  QueryDatabaseStoreAvailabilityMultiSelect: QueryDatabaseStoreAvailabilityMultiSelect;
  QueryDatabasePhoto: QueryDatabasePhoto;
  QueryDatabaseFoodGroup: QueryDatabaseFoodGroup;
  QueryDatabaseName: QueryDatabaseName;
  QueryDatabaseParent: QueryDatabaseParent;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<QuerypageArgs>>;
  database?: Resolver<Maybe<ResolversTypes['Database']>, ParentType, ContextType, Partial<QuerydatabaseArgs>>;
}>;

export type PageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastEditedTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['QueryPageCreatedBy']>, ParentType, ContextType>;
  lastEditedBy?: Resolver<Maybe<ResolversTypes['QueryPageCreatedBy']>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['QueryPageCover']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['QueryPageIcon']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['QueryPageParent']>, ParentType, ContextType>;
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['QueryPage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  publicUrl?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryPageCreatedByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageCreatedBy'] = ResolversParentTypes['QueryPageCreatedBy']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageCoverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageCover'] = ResolversParentTypes['QueryPageCover']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external?: Resolver<Maybe<ResolversTypes['QueryPageCoverExternal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageCoverExternalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageCoverExternal'] = ResolversParentTypes['QueryPageCoverExternal']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type QueryPageIconResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageIcon'] = ResolversParentTypes['QueryPageIcon']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emoji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageParentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageParent'] = ResolversParentTypes['QueryPageParent']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  databaseId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPage'] = ResolversParentTypes['QueryPage']> = ResolversObject<{
  storeAvailability?: Resolver<Maybe<ResolversTypes['QueryPageStoreAvailability']>, ParentType, ContextType>;
  foodGroup?: Resolver<Maybe<ResolversTypes['QueryPageFoodGroup']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['QueryPagePrice']>, ParentType, ContextType>;
  responsiblePerson?: Resolver<Maybe<ResolversTypes['QueryPageResponsiblePerson']>, ParentType, ContextType>;
  lastOrdered?: Resolver<Maybe<ResolversTypes['QueryPageLastOrdered']>, ParentType, ContextType>;
  costOfNextTrip?: Resolver<Maybe<ResolversTypes['QueryPageCostOfNextTrip']>, ParentType, ContextType>;
  recipes?: Resolver<Maybe<ResolversTypes['QueryPageRecipes']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['QueryPageDescription']>, ParentType, ContextType>;
  inStock?: Resolver<Maybe<ResolversTypes['QueryPageInStock']>, ParentType, ContextType>;
  numberOfMeals?: Resolver<Maybe<ResolversTypes['QueryPageNumberOfMeals']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['QueryPagePhoto']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['QueryPageName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageStoreAvailabilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageStoreAvailability'] = ResolversParentTypes['QueryPageStoreAvailability']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  multiSelect?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageStoreAvailabilityMultiSelectItems']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageStoreAvailabilityMultiSelectItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageStoreAvailabilityMultiSelectItems'] = ResolversParentTypes['QueryPageStoreAvailabilityMultiSelectItems']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageFoodGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageFoodGroup'] = ResolversParentTypes['QueryPageFoodGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  select?: Resolver<Maybe<ResolversTypes['QueryPageFoodGroupSelect']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageFoodGroupSelectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageFoodGroupSelect'] = ResolversParentTypes['QueryPageFoodGroupSelect']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPagePriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPagePrice'] = ResolversParentTypes['QueryPagePrice']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageResponsiblePersonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageResponsiblePerson'] = ResolversParentTypes['QueryPageResponsiblePerson']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageResponsiblePersonPeopleItems']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageResponsiblePersonPeopleItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageResponsiblePersonPeopleItems'] = ResolversParentTypes['QueryPageResponsiblePersonPeopleItems']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['QueryPageResponsiblePersonPeopleItemsPerson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageResponsiblePersonPeopleItemsPersonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageResponsiblePersonPeopleItemsPerson'] = ResolversParentTypes['QueryPageResponsiblePersonPeopleItemsPerson']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type QueryPageLastOrderedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageLastOrdered'] = ResolversParentTypes['QueryPageLastOrdered']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['QueryPageLastOrderedDate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageLastOrderedDateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageLastOrderedDate'] = ResolversParentTypes['QueryPageLastOrderedDate']> = ResolversObject<{
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  timeZone?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type QueryPageCostOfNextTripResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageCostOfNextTrip'] = ResolversParentTypes['QueryPageCostOfNextTrip']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formula?: Resolver<Maybe<ResolversTypes['QueryPageCostOfNextTripFormula']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageCostOfNextTripFormulaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageCostOfNextTripFormula'] = ResolversParentTypes['QueryPageCostOfNextTripFormula']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageRecipesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageRecipes'] = ResolversParentTypes['QueryPageRecipes']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageRecipesRelationItems']>>>, ParentType, ContextType>;
  hasMore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageRecipesRelationItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageRecipesRelationItems'] = ResolversParentTypes['QueryPageRecipesRelationItems']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageDescription'] = ResolversParentTypes['QueryPageDescription']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  richText?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageDescriptionRichTextItems']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageDescriptionRichTextItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageDescriptionRichTextItems'] = ResolversParentTypes['QueryPageDescriptionRichTextItems']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['QueryPageDescriptionRichTextItemsText']>, ParentType, ContextType>;
  annotations?: Resolver<Maybe<ResolversTypes['QueryPageDescriptionRichTextItemsAnnotations']>, ParentType, ContextType>;
  plainText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageDescriptionRichTextItemsTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageDescriptionRichTextItemsText'] = ResolversParentTypes['QueryPageDescriptionRichTextItemsText']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageDescriptionRichTextItemsAnnotationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageDescriptionRichTextItemsAnnotations'] = ResolversParentTypes['QueryPageDescriptionRichTextItemsAnnotations']> = ResolversObject<{
  bold?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  italic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  strikethrough?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  underline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageInStockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageInStock'] = ResolversParentTypes['QueryPageInStock']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkbox?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageNumberOfMealsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageNumberOfMeals'] = ResolversParentTypes['QueryPageNumberOfMeals']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rollup?: Resolver<Maybe<ResolversTypes['QueryPageNumberOfMealsRollup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageNumberOfMealsRollupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageNumberOfMealsRollup'] = ResolversParentTypes['QueryPageNumberOfMealsRollup']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  function?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPagePhotoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPagePhoto'] = ResolversParentTypes['QueryPagePhoto']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryPageNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryPageName'] = ResolversParentTypes['QueryPageName']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageDescriptionRichTextItems']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DatabaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Database'] = ResolversParentTypes['Database']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastEditedTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['QueryPageIcon']>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['QueryPageCover']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageDescriptionRichTextItems']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageDescriptionRichTextItems']>>>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['QueryDatabase']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['QueryDatabaseParent']>, ParentType, ContextType>;
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isInline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  publicUrl?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabase'] = ResolversParentTypes['QueryDatabase']> = ResolversObject<{
  string1?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1']>, ParentType, ContextType>;
  inStock?: Resolver<Maybe<ResolversTypes['QueryDatabaseInStock']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['QueryDatabasePrice']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['QueryDatabaseDescription']>, ParentType, ContextType>;
  lastOrdered?: Resolver<Maybe<ResolversTypes['QueryDatabaseLastOrdered']>, ParentType, ContextType>;
  meals?: Resolver<Maybe<ResolversTypes['QueryDatabaseMeals']>, ParentType, ContextType>;
  numberOfMeals?: Resolver<Maybe<ResolversTypes['QueryDatabaseNumberOfMeals']>, ParentType, ContextType>;
  storeAvailability?: Resolver<Maybe<ResolversTypes['QueryDatabaseStoreAvailability']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['QueryDatabasePhoto']>, ParentType, ContextType>;
  foodGroup?: Resolver<Maybe<ResolversTypes['QueryDatabaseFoodGroup']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['QueryDatabaseName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseString1Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseString1'] = ResolversParentTypes['QueryDatabaseString1']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  people?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1People']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface QueryDatabaseString1PeopleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['QueryDatabaseString1People'], any> {
  name: 'QueryDatabaseString1People';
}

export type QueryDatabaseInStockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseInStock'] = ResolversParentTypes['QueryDatabaseInStock']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkbox?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1People']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabasePriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabasePrice'] = ResolversParentTypes['QueryDatabasePrice']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['QueryDatabasePriceNumber']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabasePriceNumberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabasePriceNumber'] = ResolversParentTypes['QueryDatabasePriceNumber']> = ResolversObject<{
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseDescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseDescription'] = ResolversParentTypes['QueryDatabaseDescription']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  richText?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1People']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseLastOrderedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseLastOrdered'] = ResolversParentTypes['QueryDatabaseLastOrdered']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1People']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseMealsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseMeals'] = ResolversParentTypes['QueryDatabaseMeals']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<ResolversTypes['QueryDatabaseMealsRelation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseMealsRelationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseMealsRelation'] = ResolversParentTypes['QueryDatabaseMealsRelation']> = ResolversObject<{
  databaseId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syncedPropertyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseNumberOfMealsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseNumberOfMeals'] = ResolversParentTypes['QueryDatabaseNumberOfMeals']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rollup?: Resolver<Maybe<ResolversTypes['QueryDatabaseNumberOfMealsRollup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseNumberOfMealsRollupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseNumberOfMealsRollup'] = ResolversParentTypes['QueryDatabaseNumberOfMealsRollup']> = ResolversObject<{
  rollupPropertyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationPropertyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rollupPropertyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationPropertyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  function?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseStoreAvailabilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseStoreAvailability'] = ResolversParentTypes['QueryDatabaseStoreAvailability']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  multiSelect?: Resolver<Maybe<ResolversTypes['QueryDatabaseStoreAvailabilityMultiSelect']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseStoreAvailabilityMultiSelectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseStoreAvailabilityMultiSelect'] = ResolversParentTypes['QueryDatabaseStoreAvailabilityMultiSelect']> = ResolversObject<{
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryPageStoreAvailabilityMultiSelectItems']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabasePhotoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabasePhoto'] = ResolversParentTypes['QueryDatabasePhoto']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  files?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1People']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseFoodGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseFoodGroup'] = ResolversParentTypes['QueryDatabaseFoodGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  select?: Resolver<Maybe<ResolversTypes['QueryDatabaseStoreAvailabilityMultiSelect']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseNameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseName'] = ResolversParentTypes['QueryDatabaseName']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['QueryDatabaseString1People']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryDatabaseParentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryDatabaseParent'] = ResolversParentTypes['QueryDatabaseParent']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  QueryPageCreatedBy?: QueryPageCreatedByResolvers<ContextType>;
  QueryPageCover?: QueryPageCoverResolvers<ContextType>;
  QueryPageCoverExternal?: QueryPageCoverExternalResolvers<ContextType>;
  URL?: GraphQLScalarType;
  QueryPageIcon?: QueryPageIconResolvers<ContextType>;
  QueryPageParent?: QueryPageParentResolvers<ContextType>;
  QueryPage?: QueryPageResolvers<ContextType>;
  QueryPageStoreAvailability?: QueryPageStoreAvailabilityResolvers<ContextType>;
  QueryPageStoreAvailabilityMultiSelectItems?: QueryPageStoreAvailabilityMultiSelectItemsResolvers<ContextType>;
  QueryPageFoodGroup?: QueryPageFoodGroupResolvers<ContextType>;
  QueryPageFoodGroupSelect?: QueryPageFoodGroupSelectResolvers<ContextType>;
  QueryPagePrice?: QueryPagePriceResolvers<ContextType>;
  QueryPageResponsiblePerson?: QueryPageResponsiblePersonResolvers<ContextType>;
  QueryPageResponsiblePersonPeopleItems?: QueryPageResponsiblePersonPeopleItemsResolvers<ContextType>;
  QueryPageResponsiblePersonPeopleItemsPerson?: QueryPageResponsiblePersonPeopleItemsPersonResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  QueryPageLastOrdered?: QueryPageLastOrderedResolvers<ContextType>;
  QueryPageLastOrderedDate?: QueryPageLastOrderedDateResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Void?: GraphQLScalarType;
  QueryPageCostOfNextTrip?: QueryPageCostOfNextTripResolvers<ContextType>;
  QueryPageCostOfNextTripFormula?: QueryPageCostOfNextTripFormulaResolvers<ContextType>;
  QueryPageRecipes?: QueryPageRecipesResolvers<ContextType>;
  QueryPageRecipesRelationItems?: QueryPageRecipesRelationItemsResolvers<ContextType>;
  QueryPageDescription?: QueryPageDescriptionResolvers<ContextType>;
  QueryPageDescriptionRichTextItems?: QueryPageDescriptionRichTextItemsResolvers<ContextType>;
  QueryPageDescriptionRichTextItemsText?: QueryPageDescriptionRichTextItemsTextResolvers<ContextType>;
  QueryPageDescriptionRichTextItemsAnnotations?: QueryPageDescriptionRichTextItemsAnnotationsResolvers<ContextType>;
  QueryPageInStock?: QueryPageInStockResolvers<ContextType>;
  QueryPageNumberOfMeals?: QueryPageNumberOfMealsResolvers<ContextType>;
  QueryPageNumberOfMealsRollup?: QueryPageNumberOfMealsRollupResolvers<ContextType>;
  QueryPagePhoto?: QueryPagePhotoResolvers<ContextType>;
  QueryPageName?: QueryPageNameResolvers<ContextType>;
  Database?: DatabaseResolvers<ContextType>;
  QueryDatabase?: QueryDatabaseResolvers<ContextType>;
  QueryDatabaseString1?: QueryDatabaseString1Resolvers<ContextType>;
  QueryDatabaseString1People?: GraphQLScalarType;
  QueryDatabaseInStock?: QueryDatabaseInStockResolvers<ContextType>;
  QueryDatabasePrice?: QueryDatabasePriceResolvers<ContextType>;
  QueryDatabasePriceNumber?: QueryDatabasePriceNumberResolvers<ContextType>;
  QueryDatabaseDescription?: QueryDatabaseDescriptionResolvers<ContextType>;
  QueryDatabaseLastOrdered?: QueryDatabaseLastOrderedResolvers<ContextType>;
  QueryDatabaseMeals?: QueryDatabaseMealsResolvers<ContextType>;
  QueryDatabaseMealsRelation?: QueryDatabaseMealsRelationResolvers<ContextType>;
  QueryDatabaseNumberOfMeals?: QueryDatabaseNumberOfMealsResolvers<ContextType>;
  QueryDatabaseNumberOfMealsRollup?: QueryDatabaseNumberOfMealsRollupResolvers<ContextType>;
  QueryDatabaseStoreAvailability?: QueryDatabaseStoreAvailabilityResolvers<ContextType>;
  QueryDatabaseStoreAvailabilityMultiSelect?: QueryDatabaseStoreAvailabilityMultiSelectResolvers<ContextType>;
  QueryDatabasePhoto?: QueryDatabasePhotoResolvers<ContextType>;
  QueryDatabaseFoodGroup?: QueryDatabaseFoodGroupResolvers<ContextType>;
  QueryDatabaseName?: QueryDatabaseNameResolvers<ContextType>;
  QueryDatabaseParent?: QueryDatabaseParentResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace NotionTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: URL | string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** Represents date values */
  Date: string;
  /** Represents NULL values */
  Void: void;
  QueryDatabaseString1People: any;
};

export type Query = {
  page?: Maybe<Page>;
  database?: Maybe<Database>;
};


export type QuerypageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerydatabaseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['DateTime']>;
  lastEditedTime?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<QueryPageCreatedBy>;
  lastEditedBy?: Maybe<QueryPageCreatedBy>;
  cover?: Maybe<QueryPageCover>;
  icon?: Maybe<QueryPageIcon>;
  parent?: Maybe<QueryPageParent>;
  archived?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<QueryPage>;
  url?: Maybe<Scalars['URL']>;
  publicUrl?: Maybe<Scalars['Void']>;
};

export type QueryPageCreatedBy = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type QueryPageCover = {
  type?: Maybe<Scalars['String']>;
  external?: Maybe<QueryPageCoverExternal>;
};

export type QueryPageCoverExternal = {
  url?: Maybe<Scalars['URL']>;
};

export type QueryPageIcon = {
  type?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type QueryPageParent = {
  type?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['String']>;
};

export type QueryPage = {
  storeAvailability?: Maybe<QueryPageStoreAvailability>;
  foodGroup?: Maybe<QueryPageFoodGroup>;
  price?: Maybe<QueryPagePrice>;
  responsiblePerson?: Maybe<QueryPageResponsiblePerson>;
  lastOrdered?: Maybe<QueryPageLastOrdered>;
  costOfNextTrip?: Maybe<QueryPageCostOfNextTrip>;
  recipes?: Maybe<QueryPageRecipes>;
  description?: Maybe<QueryPageDescription>;
  inStock?: Maybe<QueryPageInStock>;
  numberOfMeals?: Maybe<QueryPageNumberOfMeals>;
  photo?: Maybe<QueryPagePhoto>;
  name?: Maybe<QueryPageName>;
};

export type QueryPageStoreAvailability = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multiSelect?: Maybe<Array<Maybe<QueryPageStoreAvailabilityMultiSelectItems>>>;
};

export type QueryPageStoreAvailabilityMultiSelectItems = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type QueryPageFoodGroup = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  select?: Maybe<QueryPageFoodGroupSelect>;
};

export type QueryPageFoodGroupSelect = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type QueryPagePrice = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
};

export type QueryPageResponsiblePerson = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Maybe<QueryPageResponsiblePersonPeopleItems>>>;
};

export type QueryPageResponsiblePersonPeopleItems = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['URL']>;
  type?: Maybe<Scalars['String']>;
  person?: Maybe<QueryPageResponsiblePersonPeopleItemsPerson>;
};

export type QueryPageResponsiblePersonPeopleItemsPerson = {
  email?: Maybe<Scalars['EmailAddress']>;
};

export type QueryPageLastOrdered = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<QueryPageLastOrderedDate>;
};

export type QueryPageLastOrderedDate = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Void']>;
  timeZone?: Maybe<Scalars['Void']>;
};

export type QueryPageCostOfNextTrip = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  formula?: Maybe<QueryPageCostOfNextTripFormula>;
};

export type QueryPageCostOfNextTripFormula = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type QueryPageRecipes = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  relation?: Maybe<Array<Maybe<QueryPageRecipesRelationItems>>>;
  hasMore?: Maybe<Scalars['Boolean']>;
};

export type QueryPageRecipesRelationItems = {
  id?: Maybe<Scalars['String']>;
};

export type QueryPageDescription = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  richText?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
};

export type QueryPageDescriptionRichTextItems = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<QueryPageDescriptionRichTextItemsText>;
  annotations?: Maybe<QueryPageDescriptionRichTextItemsAnnotations>;
  plainText?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['Void']>;
};

export type QueryPageDescriptionRichTextItemsText = {
  content?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['Void']>;
};

export type QueryPageDescriptionRichTextItemsAnnotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type QueryPageInStock = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  checkbox?: Maybe<Scalars['Boolean']>;
};

export type QueryPageNumberOfMeals = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rollup?: Maybe<QueryPageNumberOfMealsRollup>;
};

export type QueryPageNumberOfMealsRollup = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  function?: Maybe<Scalars['String']>;
};

export type QueryPagePhoto = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URL']>;
};

export type QueryPageName = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
};

export type Database = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['DateTime']>;
  lastEditedTime?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<QueryPageIcon>;
  cover?: Maybe<QueryPageCover>;
  url?: Maybe<Scalars['URL']>;
  title?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
  description?: Maybe<Array<Maybe<QueryPageDescriptionRichTextItems>>>;
  properties?: Maybe<QueryDatabase>;
  parent?: Maybe<QueryDatabaseParent>;
  archived?: Maybe<Scalars['Boolean']>;
  isInline?: Maybe<Scalars['Boolean']>;
  publicUrl?: Maybe<Scalars['Void']>;
};

export type QueryDatabase = {
  string1?: Maybe<QueryDatabaseString1>;
  inStock?: Maybe<QueryDatabaseInStock>;
  price?: Maybe<QueryDatabasePrice>;
  description?: Maybe<QueryDatabaseDescription>;
  lastOrdered?: Maybe<QueryDatabaseLastOrdered>;
  meals?: Maybe<QueryDatabaseMeals>;
  numberOfMeals?: Maybe<QueryDatabaseNumberOfMeals>;
  storeAvailability?: Maybe<QueryDatabaseStoreAvailability>;
  photo?: Maybe<QueryDatabasePhoto>;
  foodGroup?: Maybe<QueryDatabaseFoodGroup>;
  name?: Maybe<QueryDatabaseName>;
};

export type QueryDatabaseString1 = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  people?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseInStock = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  checkbox?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabasePrice = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  number?: Maybe<QueryDatabasePriceNumber>;
};

export type QueryDatabasePriceNumber = {
  format?: Maybe<Scalars['String']>;
};

export type QueryDatabaseDescription = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  richText?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseLastOrdered = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseMeals = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  relation?: Maybe<QueryDatabaseMealsRelation>;
};

export type QueryDatabaseMealsRelation = {
  databaseId?: Maybe<Scalars['String']>;
  syncedPropertyName?: Maybe<Scalars['String']>;
};

export type QueryDatabaseNumberOfMeals = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rollup?: Maybe<QueryDatabaseNumberOfMealsRollup>;
};

export type QueryDatabaseNumberOfMealsRollup = {
  rollupPropertyName?: Maybe<Scalars['String']>;
  relationPropertyName?: Maybe<Scalars['String']>;
  rollupPropertyId?: Maybe<Scalars['String']>;
  relationPropertyId?: Maybe<Scalars['String']>;
  function?: Maybe<Scalars['String']>;
};

export type QueryDatabaseStoreAvailability = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multiSelect?: Maybe<QueryDatabaseStoreAvailabilityMultiSelect>;
};

export type QueryDatabaseStoreAvailabilityMultiSelect = {
  options?: Maybe<Array<Maybe<QueryPageStoreAvailabilityMultiSelectItems>>>;
};

export type QueryDatabasePhoto = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  files?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseFoodGroup = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  select?: Maybe<QueryDatabaseStoreAvailabilityMultiSelect>;
};

export type QueryDatabaseName = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['QueryDatabaseString1People']>;
};

export type QueryDatabaseParent = {
  type?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['String']>;
};

    }
    export type QueryNotionSdk = {
  /** undefined **/
  page: InContextSdkMethod<NotionTypes.Query['page'], NotionTypes.QuerypageArgs, MeshContext>,
  /** undefined **/
  database: InContextSdkMethod<NotionTypes.Query['database'], NotionTypes.QuerydatabaseArgs, MeshContext>
};

export type MutationNotionSdk = {

};

export type SubscriptionNotionSdk = {

};

export type NotionContext = {
      ["Notion"]: { Query: QueryNotionSdk, Mutation: MutationNotionSdk, Subscription: SubscriptionNotionSdk },
    };

export type MeshContext = NotionContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                    additionalPackagePrefixes: [],
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));

export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;