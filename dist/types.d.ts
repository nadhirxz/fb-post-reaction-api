import * as t from 'ts-interface-checker';
export declare type BodyType = {
    username: string;
    password: string;
    post: string;
    reaction?: 'like' | 'love' | 'care' | 'haha' | 'wow' | 'sad' | 'angry';
};
export declare const Body: t.Checker;
