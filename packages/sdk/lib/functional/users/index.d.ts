/**
 * @packageDocumentation
 * @module api.functional.users
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";
import type { IUser } from "./../../structures/user/user";
/**
 * this is sample api
 * @summary user find by user id
 * @tag users
 * @param user_id user id
 * @return user info
 * @throw 404 Not Found
 *
 * @controller UsersController.getOne()
 * @path GET /users/:user_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export declare function getOne(connection: IConnection, user_id: string): Promise<getOne.Output>;
export declare namespace getOne {
    type Output = IUser;
    const METHOD: "GET";
    const PATH: string;
    const ENCRYPTED: Fetcher.IEncrypted;
    const path: (user_id: string) => string;
    const random: (g?: Partial<typia.IRandomGenerator>) => Output;
    const simulate: (connection: IConnection, user_id: string) => Promise<Output>;
}
/**
 * @controller UsersController.create()
 * @path POST /users
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export declare function create(connection: IConnection, body: IUser.ICreate1): Promise<void>;
export declare namespace create {
    type Input = IUser.ICreate1;
    const METHOD: "POST";
    const PATH: string;
    const ENCRYPTED: Fetcher.IEncrypted;
    const path: () => string;
    const simulate: (connection: IConnection, body: create.Input) => Promise<void>;
    const stringify: (input: Input) => string;
}
