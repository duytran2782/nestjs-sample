import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

export class UpdatePostDto {
  title: string;
  description: string;
  thumbnail: string;
  status: number;

  @IsNotEmpty()
  category: Category;
}
