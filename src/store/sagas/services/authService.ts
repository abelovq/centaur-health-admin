import adapter from '../../adapter';

class AuthService {
  baseHeaders: { [prop: string]: string } = {
    'content-type': 'application/json',
  };

  register(payload: any) {
    const url = 'auth/login';
    return adapter.post<any>(url, payload, {
      headers: this.baseHeaders,
    });
  }

  login(payload: any) {
    const url = 'auth/login';
    return adapter.post<any>(url, payload, {
      headers: this.baseHeaders,
    });
  }
}

export default new AuthService();
