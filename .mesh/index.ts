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
};

export type Query = {
  page?: Maybe<Page>;
};


export type QuerypageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  created_time?: Maybe<Scalars['DateTime']>;
  last_edited_time?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<query_page_created_by>;
  last_edited_by?: Maybe<query_page_created_by>;
  cover?: Maybe<query_page_cover>;
  icon?: Maybe<query_page_icon>;
  parent?: Maybe<query_page_parent>;
  archived?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<query_page>;
  url?: Maybe<Scalars['URL']>;
  public_url?: Maybe<Scalars['Void']>;
};

export type query_page_created_by = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type query_page_cover = {
  type?: Maybe<Scalars['String']>;
  external?: Maybe<query_page_cover_external>;
};

export type query_page_cover_external = {
  url?: Maybe<Scalars['URL']>;
};

export type query_page_icon = {
  type?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type query_page_parent = {
  type?: Maybe<Scalars['String']>;
  database_id?: Maybe<Scalars['String']>;
};

export type query_page = {
  Store_availability?: Maybe<query_page_Store_availability>;
  Food_group?: Maybe<query_page_Food_group>;
  Price?: Maybe<query_page_Price>;
  Responsible_Person?: Maybe<query_page_Responsible_Person>;
  Last_ordered?: Maybe<query_page_Last_ordered>;
  Cost_of_next_trip?: Maybe<query_page_Cost_of_next_trip>;
  Recipes?: Maybe<query_page_Recipes>;
  Description?: Maybe<query_page_Description>;
  In_stock?: Maybe<query_page_In_stock>;
  Number_of_meals?: Maybe<query_page_Number_of_meals>;
  Photo?: Maybe<query_page_Photo>;
  Name?: Maybe<query_page_Name>;
};

export type query_page_Store_availability = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multi_select?: Maybe<Array<Maybe<query_page_Store_availability_multi_select_items>>>;
};

export type query_page_Store_availability_multi_select_items = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type query_page_Food_group = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  select?: Maybe<query_page_Food_group_select>;
};

export type query_page_Food_group_select = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type query_page_Price = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
};

export type query_page_Responsible_Person = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Maybe<query_page_Responsible_Person_people_items>>>;
};

export type query_page_Responsible_Person_people_items = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['URL']>;
  type?: Maybe<Scalars['String']>;
  person?: Maybe<query_page_Responsible_Person_people_items_person>;
};

export type query_page_Responsible_Person_people_items_person = {
  email?: Maybe<Scalars['EmailAddress']>;
};

export type query_page_Last_ordered = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<query_page_Last_ordered_date>;
};

export type query_page_Last_ordered_date = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Void']>;
  time_zone?: Maybe<Scalars['Void']>;
};

export type query_page_Cost_of_next_trip = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  formula?: Maybe<query_page_Cost_of_next_trip_formula>;
};

export type query_page_Cost_of_next_trip_formula = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type query_page_Recipes = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  relation?: Maybe<Array<Maybe<query_page_Recipes_relation_items>>>;
  has_more?: Maybe<Scalars['Boolean']>;
};

export type query_page_Recipes_relation_items = {
  id?: Maybe<Scalars['String']>;
};

export type query_page_Description = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Array<Maybe<query_page_Description_rich_text_items>>>;
};

export type query_page_Description_rich_text_items = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<query_page_Description_rich_text_items_text>;
  annotations?: Maybe<query_page_Description_rich_text_items_annotations>;
  plain_text?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['Void']>;
};

export type query_page_Description_rich_text_items_text = {
  content?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['Void']>;
};

export type query_page_Description_rich_text_items_annotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type query_page_In_stock = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  checkbox?: Maybe<Scalars['Boolean']>;
};

export type query_page_Number_of_meals = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rollup?: Maybe<query_page_Number_of_meals_rollup>;
};

export type query_page_Number_of_meals_rollup = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  function?: Maybe<Scalars['String']>;
};

export type query_page_Photo = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URL']>;
};

export type query_page_Name = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<query_page_Description_rich_text_items>>>;
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
  query_page_created_by: ResolverTypeWrapper<query_page_created_by>;
  query_page_cover: ResolverTypeWrapper<query_page_cover>;
  query_page_cover_external: ResolverTypeWrapper<query_page_cover_external>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  query_page_icon: ResolverTypeWrapper<query_page_icon>;
  query_page_parent: ResolverTypeWrapper<query_page_parent>;
  query_page: ResolverTypeWrapper<query_page>;
  query_page_Store_availability: ResolverTypeWrapper<query_page_Store_availability>;
  query_page_Store_availability_multi_select_items: ResolverTypeWrapper<query_page_Store_availability_multi_select_items>;
  query_page_Food_group: ResolverTypeWrapper<query_page_Food_group>;
  query_page_Food_group_select: ResolverTypeWrapper<query_page_Food_group_select>;
  query_page_Price: ResolverTypeWrapper<query_page_Price>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  query_page_Responsible_Person: ResolverTypeWrapper<query_page_Responsible_Person>;
  query_page_Responsible_Person_people_items: ResolverTypeWrapper<query_page_Responsible_Person_people_items>;
  query_page_Responsible_Person_people_items_person: ResolverTypeWrapper<query_page_Responsible_Person_people_items_person>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  query_page_Last_ordered: ResolverTypeWrapper<query_page_Last_ordered>;
  query_page_Last_ordered_date: ResolverTypeWrapper<query_page_Last_ordered_date>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  query_page_Cost_of_next_trip: ResolverTypeWrapper<query_page_Cost_of_next_trip>;
  query_page_Cost_of_next_trip_formula: ResolverTypeWrapper<query_page_Cost_of_next_trip_formula>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  query_page_Recipes: ResolverTypeWrapper<query_page_Recipes>;
  query_page_Recipes_relation_items: ResolverTypeWrapper<query_page_Recipes_relation_items>;
  query_page_Description: ResolverTypeWrapper<query_page_Description>;
  query_page_Description_rich_text_items: ResolverTypeWrapper<query_page_Description_rich_text_items>;
  query_page_Description_rich_text_items_text: ResolverTypeWrapper<query_page_Description_rich_text_items_text>;
  query_page_Description_rich_text_items_annotations: ResolverTypeWrapper<query_page_Description_rich_text_items_annotations>;
  query_page_In_stock: ResolverTypeWrapper<query_page_In_stock>;
  query_page_Number_of_meals: ResolverTypeWrapper<query_page_Number_of_meals>;
  query_page_Number_of_meals_rollup: ResolverTypeWrapper<query_page_Number_of_meals_rollup>;
  query_page_Photo: ResolverTypeWrapper<query_page_Photo>;
  query_page_Name: ResolverTypeWrapper<query_page_Name>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars['ID'];
  Page: Page;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  query_page_created_by: query_page_created_by;
  query_page_cover: query_page_cover;
  query_page_cover_external: query_page_cover_external;
  URL: Scalars['URL'];
  query_page_icon: query_page_icon;
  query_page_parent: query_page_parent;
  query_page: query_page;
  query_page_Store_availability: query_page_Store_availability;
  query_page_Store_availability_multi_select_items: query_page_Store_availability_multi_select_items;
  query_page_Food_group: query_page_Food_group;
  query_page_Food_group_select: query_page_Food_group_select;
  query_page_Price: query_page_Price;
  Float: Scalars['Float'];
  query_page_Responsible_Person: query_page_Responsible_Person;
  query_page_Responsible_Person_people_items: query_page_Responsible_Person_people_items;
  query_page_Responsible_Person_people_items_person: query_page_Responsible_Person_people_items_person;
  EmailAddress: Scalars['EmailAddress'];
  query_page_Last_ordered: query_page_Last_ordered;
  query_page_Last_ordered_date: query_page_Last_ordered_date;
  Date: Scalars['Date'];
  Void: Scalars['Void'];
  query_page_Cost_of_next_trip: query_page_Cost_of_next_trip;
  query_page_Cost_of_next_trip_formula: query_page_Cost_of_next_trip_formula;
  Int: Scalars['Int'];
  query_page_Recipes: query_page_Recipes;
  query_page_Recipes_relation_items: query_page_Recipes_relation_items;
  query_page_Description: query_page_Description;
  query_page_Description_rich_text_items: query_page_Description_rich_text_items;
  query_page_Description_rich_text_items_text: query_page_Description_rich_text_items_text;
  query_page_Description_rich_text_items_annotations: query_page_Description_rich_text_items_annotations;
  query_page_In_stock: query_page_In_stock;
  query_page_Number_of_meals: query_page_Number_of_meals;
  query_page_Number_of_meals_rollup: query_page_Number_of_meals_rollup;
  query_page_Photo: query_page_Photo;
  query_page_Name: query_page_Name;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<QuerypageArgs>>;
}>;

export type PageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_edited_time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  created_by?: Resolver<Maybe<ResolversTypes['query_page_created_by']>, ParentType, ContextType>;
  last_edited_by?: Resolver<Maybe<ResolversTypes['query_page_created_by']>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['query_page_cover']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['query_page_icon']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['query_page_parent']>, ParentType, ContextType>;
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['query_page']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  public_url?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type query_page_created_byResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_created_by'] = ResolversParentTypes['query_page_created_by']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_coverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_cover'] = ResolversParentTypes['query_page_cover']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external?: Resolver<Maybe<ResolversTypes['query_page_cover_external']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_cover_externalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_cover_external'] = ResolversParentTypes['query_page_cover_external']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type query_page_iconResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_icon'] = ResolversParentTypes['query_page_icon']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emoji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_parentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_parent'] = ResolversParentTypes['query_page_parent']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  database_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_pageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page'] = ResolversParentTypes['query_page']> = ResolversObject<{
  Store_availability?: Resolver<Maybe<ResolversTypes['query_page_Store_availability']>, ParentType, ContextType>;
  Food_group?: Resolver<Maybe<ResolversTypes['query_page_Food_group']>, ParentType, ContextType>;
  Price?: Resolver<Maybe<ResolversTypes['query_page_Price']>, ParentType, ContextType>;
  Responsible_Person?: Resolver<Maybe<ResolversTypes['query_page_Responsible_Person']>, ParentType, ContextType>;
  Last_ordered?: Resolver<Maybe<ResolversTypes['query_page_Last_ordered']>, ParentType, ContextType>;
  Cost_of_next_trip?: Resolver<Maybe<ResolversTypes['query_page_Cost_of_next_trip']>, ParentType, ContextType>;
  Recipes?: Resolver<Maybe<ResolversTypes['query_page_Recipes']>, ParentType, ContextType>;
  Description?: Resolver<Maybe<ResolversTypes['query_page_Description']>, ParentType, ContextType>;
  In_stock?: Resolver<Maybe<ResolversTypes['query_page_In_stock']>, ParentType, ContextType>;
  Number_of_meals?: Resolver<Maybe<ResolversTypes['query_page_Number_of_meals']>, ParentType, ContextType>;
  Photo?: Resolver<Maybe<ResolversTypes['query_page_Photo']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['query_page_Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Store_availabilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Store_availability'] = ResolversParentTypes['query_page_Store_availability']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  multi_select?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_page_Store_availability_multi_select_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Store_availability_multi_select_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Store_availability_multi_select_items'] = ResolversParentTypes['query_page_Store_availability_multi_select_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Food_groupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Food_group'] = ResolversParentTypes['query_page_Food_group']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  select?: Resolver<Maybe<ResolversTypes['query_page_Food_group_select']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Food_group_selectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Food_group_select'] = ResolversParentTypes['query_page_Food_group_select']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_PriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Price'] = ResolversParentTypes['query_page_Price']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Responsible_PersonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Responsible_Person'] = ResolversParentTypes['query_page_Responsible_Person']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_page_Responsible_Person_people_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Responsible_Person_people_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Responsible_Person_people_items'] = ResolversParentTypes['query_page_Responsible_Person_people_items']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['query_page_Responsible_Person_people_items_person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Responsible_Person_people_items_personResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Responsible_Person_people_items_person'] = ResolversParentTypes['query_page_Responsible_Person_people_items_person']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type query_page_Last_orderedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Last_ordered'] = ResolversParentTypes['query_page_Last_ordered']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['query_page_Last_ordered_date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Last_ordered_dateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Last_ordered_date'] = ResolversParentTypes['query_page_Last_ordered_date']> = ResolversObject<{
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  time_zone?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type query_page_Cost_of_next_tripResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Cost_of_next_trip'] = ResolversParentTypes['query_page_Cost_of_next_trip']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formula?: Resolver<Maybe<ResolversTypes['query_page_Cost_of_next_trip_formula']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Cost_of_next_trip_formulaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Cost_of_next_trip_formula'] = ResolversParentTypes['query_page_Cost_of_next_trip_formula']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_RecipesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Recipes'] = ResolversParentTypes['query_page_Recipes']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relation?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_page_Recipes_relation_items']>>>, ParentType, ContextType>;
  has_more?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Recipes_relation_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Recipes_relation_items'] = ResolversParentTypes['query_page_Recipes_relation_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_DescriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Description'] = ResolversParentTypes['query_page_Description']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rich_text?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_page_Description_rich_text_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Description_rich_text_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Description_rich_text_items'] = ResolversParentTypes['query_page_Description_rich_text_items']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['query_page_Description_rich_text_items_text']>, ParentType, ContextType>;
  annotations?: Resolver<Maybe<ResolversTypes['query_page_Description_rich_text_items_annotations']>, ParentType, ContextType>;
  plain_text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Description_rich_text_items_textResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Description_rich_text_items_text'] = ResolversParentTypes['query_page_Description_rich_text_items_text']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Description_rich_text_items_annotationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Description_rich_text_items_annotations'] = ResolversParentTypes['query_page_Description_rich_text_items_annotations']> = ResolversObject<{
  bold?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  italic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  strikethrough?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  underline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_In_stockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_In_stock'] = ResolversParentTypes['query_page_In_stock']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkbox?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Number_of_mealsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Number_of_meals'] = ResolversParentTypes['query_page_Number_of_meals']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rollup?: Resolver<Maybe<ResolversTypes['query_page_Number_of_meals_rollup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_Number_of_meals_rollupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Number_of_meals_rollup'] = ResolversParentTypes['query_page_Number_of_meals_rollup']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  function?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_PhotoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Photo'] = ResolversParentTypes['query_page_Photo']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_page_NameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_page_Name'] = ResolversParentTypes['query_page_Name']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_page_Description_rich_text_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  query_page_created_by?: query_page_created_byResolvers<ContextType>;
  query_page_cover?: query_page_coverResolvers<ContextType>;
  query_page_cover_external?: query_page_cover_externalResolvers<ContextType>;
  URL?: GraphQLScalarType;
  query_page_icon?: query_page_iconResolvers<ContextType>;
  query_page_parent?: query_page_parentResolvers<ContextType>;
  query_page?: query_pageResolvers<ContextType>;
  query_page_Store_availability?: query_page_Store_availabilityResolvers<ContextType>;
  query_page_Store_availability_multi_select_items?: query_page_Store_availability_multi_select_itemsResolvers<ContextType>;
  query_page_Food_group?: query_page_Food_groupResolvers<ContextType>;
  query_page_Food_group_select?: query_page_Food_group_selectResolvers<ContextType>;
  query_page_Price?: query_page_PriceResolvers<ContextType>;
  query_page_Responsible_Person?: query_page_Responsible_PersonResolvers<ContextType>;
  query_page_Responsible_Person_people_items?: query_page_Responsible_Person_people_itemsResolvers<ContextType>;
  query_page_Responsible_Person_people_items_person?: query_page_Responsible_Person_people_items_personResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  query_page_Last_ordered?: query_page_Last_orderedResolvers<ContextType>;
  query_page_Last_ordered_date?: query_page_Last_ordered_dateResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Void?: GraphQLScalarType;
  query_page_Cost_of_next_trip?: query_page_Cost_of_next_tripResolvers<ContextType>;
  query_page_Cost_of_next_trip_formula?: query_page_Cost_of_next_trip_formulaResolvers<ContextType>;
  query_page_Recipes?: query_page_RecipesResolvers<ContextType>;
  query_page_Recipes_relation_items?: query_page_Recipes_relation_itemsResolvers<ContextType>;
  query_page_Description?: query_page_DescriptionResolvers<ContextType>;
  query_page_Description_rich_text_items?: query_page_Description_rich_text_itemsResolvers<ContextType>;
  query_page_Description_rich_text_items_text?: query_page_Description_rich_text_items_textResolvers<ContextType>;
  query_page_Description_rich_text_items_annotations?: query_page_Description_rich_text_items_annotationsResolvers<ContextType>;
  query_page_In_stock?: query_page_In_stockResolvers<ContextType>;
  query_page_Number_of_meals?: query_page_Number_of_mealsResolvers<ContextType>;
  query_page_Number_of_meals_rollup?: query_page_Number_of_meals_rollupResolvers<ContextType>;
  query_page_Photo?: query_page_PhotoResolvers<ContextType>;
  query_page_Name?: query_page_NameResolvers<ContextType>;
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
};

export type Query = {
  page?: Maybe<Page>;
};


export type QuerypageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  created_time?: Maybe<Scalars['DateTime']>;
  last_edited_time?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<query_page_created_by>;
  last_edited_by?: Maybe<query_page_created_by>;
  cover?: Maybe<query_page_cover>;
  icon?: Maybe<query_page_icon>;
  parent?: Maybe<query_page_parent>;
  archived?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<query_page>;
  url?: Maybe<Scalars['URL']>;
  public_url?: Maybe<Scalars['Void']>;
};

export type query_page_created_by = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type query_page_cover = {
  type?: Maybe<Scalars['String']>;
  external?: Maybe<query_page_cover_external>;
};

export type query_page_cover_external = {
  url?: Maybe<Scalars['URL']>;
};

export type query_page_icon = {
  type?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
};

export type query_page_parent = {
  type?: Maybe<Scalars['String']>;
  database_id?: Maybe<Scalars['String']>;
};

export type query_page = {
  Store_availability?: Maybe<query_page_Store_availability>;
  Food_group?: Maybe<query_page_Food_group>;
  Price?: Maybe<query_page_Price>;
  Responsible_Person?: Maybe<query_page_Responsible_Person>;
  Last_ordered?: Maybe<query_page_Last_ordered>;
  Cost_of_next_trip?: Maybe<query_page_Cost_of_next_trip>;
  Recipes?: Maybe<query_page_Recipes>;
  Description?: Maybe<query_page_Description>;
  In_stock?: Maybe<query_page_In_stock>;
  Number_of_meals?: Maybe<query_page_Number_of_meals>;
  Photo?: Maybe<query_page_Photo>;
  Name?: Maybe<query_page_Name>;
};

export type query_page_Store_availability = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  multi_select?: Maybe<Array<Maybe<query_page_Store_availability_multi_select_items>>>;
};

export type query_page_Store_availability_multi_select_items = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type query_page_Food_group = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  select?: Maybe<query_page_Food_group_select>;
};

export type query_page_Food_group_select = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type query_page_Price = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
};

export type query_page_Responsible_Person = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Maybe<query_page_Responsible_Person_people_items>>>;
};

export type query_page_Responsible_Person_people_items = {
  object?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['URL']>;
  type?: Maybe<Scalars['String']>;
  person?: Maybe<query_page_Responsible_Person_people_items_person>;
};

export type query_page_Responsible_Person_people_items_person = {
  email?: Maybe<Scalars['EmailAddress']>;
};

export type query_page_Last_ordered = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  date?: Maybe<query_page_Last_ordered_date>;
};

export type query_page_Last_ordered_date = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Void']>;
  time_zone?: Maybe<Scalars['Void']>;
};

export type query_page_Cost_of_next_trip = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  formula?: Maybe<query_page_Cost_of_next_trip_formula>;
};

export type query_page_Cost_of_next_trip_formula = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type query_page_Recipes = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  relation?: Maybe<Array<Maybe<query_page_Recipes_relation_items>>>;
  has_more?: Maybe<Scalars['Boolean']>;
};

export type query_page_Recipes_relation_items = {
  id?: Maybe<Scalars['String']>;
};

export type query_page_Description = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Array<Maybe<query_page_Description_rich_text_items>>>;
};

export type query_page_Description_rich_text_items = {
  type?: Maybe<Scalars['String']>;
  text?: Maybe<query_page_Description_rich_text_items_text>;
  annotations?: Maybe<query_page_Description_rich_text_items_annotations>;
  plain_text?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['Void']>;
};

export type query_page_Description_rich_text_items_text = {
  content?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['Void']>;
};

export type query_page_Description_rich_text_items_annotations = {
  bold?: Maybe<Scalars['Boolean']>;
  italic?: Maybe<Scalars['Boolean']>;
  strikethrough?: Maybe<Scalars['Boolean']>;
  underline?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
};

export type query_page_In_stock = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  checkbox?: Maybe<Scalars['Boolean']>;
};

export type query_page_Number_of_meals = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  rollup?: Maybe<query_page_Number_of_meals_rollup>;
};

export type query_page_Number_of_meals_rollup = {
  type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  function?: Maybe<Scalars['String']>;
};

export type query_page_Photo = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['URL']>;
};

export type query_page_Name = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Array<Maybe<query_page_Description_rich_text_items>>>;
};

    }
    export type QueryNotionSdk = {
  /** undefined **/
  page: InContextSdkMethod<NotionTypes.Query['page'], NotionTypes.QuerypageArgs, MeshContext>
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