import Link from "next/link";

function ButtonCV({ className = "" }) {
  return (
    <Link
      className={`cv-info mx-auto block w-auto max-w-fit mt-5 ${className}`}
      href="/files/CV_Flutter_Developer_Pham_Manh_Huy_EN_Ver2.pdf"
      target="_blank"
    >
      👉 Check out my CV.
    </Link>
  );
}

export default ButtonCV;
