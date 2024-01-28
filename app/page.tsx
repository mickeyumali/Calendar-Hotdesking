import Image from "next/image";
import dynamic from 'next/dynamic';


export default function Home() {
  const Calendar = dynamic(() => import('./UserInterface/Calendar'), {
    ssr: true,
  });

  return (
    <div className="">
      <Calendar />
    </div>
  );
}
