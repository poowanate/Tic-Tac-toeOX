import { request } from "http";

let scores = { player: 0, ai: 0 };
let streaks = { player: 0, ai: 0 };


export async function GET(request) {
  return Response.json({ score: scores, streaks });
}

export async function POST(request) {
  // const data = await request.json(); // อ่านข้อมูลจาก body
  const data = await request.json();
  console.log(data.winner)
 
  
      if (data.winner === 'X' || data.winner === 'O') {
      // อัปเดต streak
      if (data.winner === 'X') {
        streaks.player += 1;
        if (streaks.player >= 3) {
          scores.player += 1;  // เพิ่มคะแนน 1 ถ้าชนะติดต่อกัน 3 ครั้ง
          streaks.player = 0;  // resetstreak
        }
      } else {
        streaks.ai += 1;
        streaks.player = 0;  // resetstreakplayer
        if(scores.player >0){
          scores.player -= 1;  //ลบคะแนนผู้เล่น
        }
        if (streaks.ai >= 3) {
          scores.ai += 1;  // เพิ่มคะแนน 1 ถ้าชนะติดต่อกัน 3 ครั้ง
        }
      }

      // อัปเดตคะแนน
      if (data.winner === 'X') {
        scores.player += 1;
      } else {
        scores.ai += 1;
      }}

  return new Response(
    JSON.stringify({ message: "This is a POST request", data }),
    { headers: { "Content-Type": "application/json" } }
  );
}


// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     // ส่งคะแนนและสถิติ
//     return res.status(200).json({ score: scores, streaks });
//   } else if (req.method === 'POST') {
//     const { winner } = req.body;

//     if (winner === 'X' || winner === 'O') {
//       // อัปเดต streak
//       if (winner === 'X') {
//         streaks.player += 1;
//         if (streaks.player >= 3) {
//           scores.player += 1;  // เพิ่มคะแนน 1 ถ้าชนะติดต่อกัน 3 ครั้ง
//         }
//       } else {
//         streaks.ai += 1;
//         if (streaks.ai >= 3) {
//           scores.ai += 1;  // เพิ่มคะแนน 1 ถ้าชนะติดต่อกัน 3 ครั้ง
//         }
//       }

//       // อัปเดตคะแนน
//       if (winner === 'X') {
//         scores.player += 1;
//       } else {
//         scores.ai += 1;
//       }

//       return res.status(200).json({ message: 'Score and streak updated' });
//     } else {
//       return res.status(400).json({ error: 'Invalid winner' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }
// }
// export async function GET() {
//   return Response.json({ score: scores, streaks });
// }
// export async function POST(req: Request) {
//   const data = await req.json();
//   console.log(data);
//   return new Response("Hello, Next.js!");
// }
// export async function POST(request:any) =>{
//       const { winner } = req.body;

//     if (winner === 'X' || winner === 'O') {
//       // อัปเดต streak
//       if (winner === 'X') {
//         streaks.player += 1;
//         if (streaks.player >= 3) {
//           scores.player += 1;  // เพิ่มคะแนน 1 ถ้าชนะติดต่อกัน 3 ครั้ง
//         }
//       } else {
//         streaks.ai += 1;
//         if (streaks.ai >= 3) {
//           scores.ai += 1;  // เพิ่มคะแนน 1 ถ้าชนะติดต่อกัน 3 ครั้ง
//         }
//       }

//       // อัปเดตคะแนน
//       if (winner === 'X') {
//         scores.player += 1;
//       } else {
//         scores.ai += 1;
//       }

     
//   return Response.json({
//     message: 'Score and streak updated',
//   });
// }
// }
// export async function GET() {
//   return Response.json({ score: scores, streaks });
// }