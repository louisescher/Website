export default function PieChartIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1,1)" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className={"pieChart " + className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  )
}