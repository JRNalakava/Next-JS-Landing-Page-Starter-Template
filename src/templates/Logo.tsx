import Image from 'next/image'

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '100' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>

      <img
        src="assets/brand/logo.png"
        width={size}
        height={1000}
        alt="Olhar's brand"/>
    </span>
  );
};

export { Logo };
