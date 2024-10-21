export default function ArtPiecePreview({ pieces }) {
  console.log(pieces);

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <img src={piece.imageSource} alt={piece.name} />
          <p>{piece.name}</p>
          <p>{piece.artist}</p>
        </li>
      ))}
    </ul>
  );
}

// import "./List.css";

// export function List({ activities, onDeleteActivity, isGoodWeather }) {
//   return (
//     <div className="list-container">
//       <ul className="list">
//         {activities
//           .filter((item) => item.isForGoodWeather === isGoodWeather)
//           .map((item) => (
//             <li key={item.id} className="list__item">
//               {item.name}
//               <button type="button" onClick={() => onDeleteActivity(item.id)}>
//                 X
//               </button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
