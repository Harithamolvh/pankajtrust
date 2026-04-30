<?php

namespace Database\Seeders;

use App\Models\NewsPost;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NewsPostSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('email', 'admin@pankajtrust.org')->first();
        
        $posts = [
            [
                'title' => 'Scholarship Distribution 2024: A Milestone Event',
                'excerpt' => 'Over 100 students received merit-cum-means scholarships in our annual distribution ceremony held at Ernakulam.',
                'body' => '<p>The Dr. Pankaj Educational and Charitable Trust held its annual scholarship distribution ceremony for the academic year 2024-25. The event was attended by prominent educators and trust members.</p><p>This year, we have expanded our reach to include more schools from the Idukki district, focusing on students who have shown exceptional academic performance despite financial challenges.</p>',
                'published_at' => now()->subDays(2),
                'image' => 'https://picsum.photos/seed/news1/1200/800',
            ],
            [
                'title' => 'New Vocational Training Program Launched',
                'excerpt' => 'Expanding our mission beyond scholarships, we are launching a new vocational training initiative for our graduated scholars.',
                'body' => '<p>We are excited to announce the launch of our Vocational Training Program. This initiative aims to provide practical skills and job placement assistance to students who have successfully completed their degree courses under our scholarship program.</p><p>The first batch will focus on digital literacy and professional communication skills.</p>',
                'published_at' => now()->subDays(10),
                'image' => 'https://picsum.photos/seed/news2/1200/800',
            ],
            [
                'title' => 'Trust Founder Dr. Pankaj Visits Partner Schools',
                'excerpt' => 'Founder Dr. Thampil Pankaj recently visited several government schools in Maradu to interact with potential scholarship candidates.',
                'body' => '<p>Dr. Thampil Pankaj, the founder of the Trust, personally visited three partner government schools last week. During his visit, he interacted with students and teachers to better understand the challenges faced by bright students from low-income families.</p><p>These interactions are crucial for our selection process, ensuring that support reaches those who need it most.</p>',
                'published_at' => now()->subMonths(1),
                'image' => 'https://picsum.photos/seed/news3/1200/800',
            ],
        ];

        foreach ($posts as $postData) {
            $imageUrl = $postData['image'];
            unset($postData['image']);
            
            $post = NewsPost::create(array_merge($postData, [
                'slug' => Str::slug($postData['title']),
                'author_id' => $admin?->id,
                'published_at' => $postData['published_at'],
            ]));

            try {
                $post->addMediaFromUrl($imageUrl)
                    ->toMediaCollection('cover');
            } catch (\Exception $e) {
                // Skip if image download fails
            }
        }
    }
}
