import {IUser} from './IUser';
export class User implements IUser{
    
    constructor(public id='',public firstname='',public lastname='',public email=''){}
}