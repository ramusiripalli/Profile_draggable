import { Post } from '../types/profile';

interface PostsSectionProps {
  posts: Post[];
}

export function PostsSection({ posts }: PostsSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="p-4 border rounded-md hover:shadow-sm transition-shadow"
          >
            <h3 className="font-medium mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </div>
        ))}
      </div>
    </div>
  );
}