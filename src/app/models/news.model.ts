import { User } from '@angular/fire/auth';
import { article } from "./Article.model.";

export interface News{

    tags: string;
    user:{
        name: string
        username: string
        twitter_username: string
        github_username: string
        website_url: string
        profile_image: string
        profile_image_90: string
    }
    
    articles: article[];
}
