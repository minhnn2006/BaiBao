import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, User } from '@angular/fire/auth';
import { signInWithPopup } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }
  currentUser!: User | null
  async loginWithGoogle() {
    
    let provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout() {
    await this.auth.signOut();
  }
}
