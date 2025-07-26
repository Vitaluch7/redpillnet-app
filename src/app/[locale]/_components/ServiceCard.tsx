import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ServiceCard({ title, description, link }: Props) {
  return (
    <div className="p-6 transition border rounded-lg shadow hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link href={link} className="font-medium text-blue-600 hover:underline">
        Перейти →
      </Link>
    </div>
  );
}
