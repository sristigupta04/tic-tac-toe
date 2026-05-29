export function Cell({
   value,
   onClick,
   isWinningCell
}) {

   return (

      <button
         className={
            isWinningCell
            ? "cell winn"
            : "cell"
         }
         onClick={onClick}
      >

         {value}

      </button>

   );
}