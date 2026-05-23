import{PostUserService} from './index';
import{GetUserService} from './index';
import{GetAllUsersService} from './index';
import{DeleteUserService} from './index';
import{DeleteAllUserService} from './index';

export class Api {
     constructor(request) {
        this.request = request;
        this.postUser = new PostUserService(request);
        this.getUser = new GetUserService(request);
        this.getAllUsers = new GetAllUsersService(request);
        this.deleteUser = new DeleteUserService(request);
        this.deleteAllUsers = new DeleteAllUserService(request);
    }
}