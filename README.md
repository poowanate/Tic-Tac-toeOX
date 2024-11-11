## โปรเจ็คเกม OX (Tic-tac-toe) ด้วย Web Application stack Next.js
คู่มือการเปิดไฟล์ สิ่งจำเป็นที่จะต้องมี

 - ติดตั้งNode.js [Node.js — Run JavaScript Everywhere](https://nodejs.org/en)
 - Code Editing - Visual Studio Code(VScode)
 
## สารบัญ
 - [ขั้นตอนการติดตั้ง](#%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87)
 - [วิธีการเปิดใช้งาน](#%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99)
 - [วิธีใช้งาน](#%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99)

 
## ขั้นตอนการติดตั้ง


    git clone https://github.com/poowanate/Tic-Tac-toeOX.git
    cd Tic-Tac-toeOX
    npm i

 ## วิธีการเปิดใช้งาน

    npm run dev

 ## วิธีใช้งาน

    http://localhost:3000
    

> **ระบบจะบังคับให้ล็อคอินก่อนผ่าน Auth0**

![enter image description here](https://img2.pic.in.th/pic/imageaddefc8c776b4a9a.png)

> **จากนั้นเมื่อ Login สำเร็จจะเข้าสู่หน้าแรกสามารถเริ่มเกมส์ได้ทันทีที่ปุ่ม Start**


![enter image description here](https://img5.pic.in.th/file/secure-sv1/image4bc668bfe93d1d4c.png)


**หน้าตาเมนูเกมส์**
 ![enter image description here](https://img2.pic.in.th/pic/image74eafdfdeb38c193.png)

 **1. ท้าสู้AI ถ้าชนะจะได้รับ 1 คะแนน แพ้จะลบ 1 คะแนน 
     2. เมื่อชนะติดต่อกัน 3 ครั้งคะแนน +เพิ่ม 1 คะแนนและเริ่มนับชนะต่อเนื่องใหม่
     3. เสมอจะไม่เสียจำนวนนับของการชนะติดต่อกัน
     4. ระบบคะแนนจะนับคะแนนจาก API refresh คะแนนไม่หาย**

 
 
 **หน้าตาระบบสมาชิก**
 ![enter image description here](https://img5.pic.in.th/file/secure-sv1/imagec457cbc250c6f68a.png)

มุมบนขวาของโปรแกรมจะมีปุ่มไว้สำหรับเปิด Dropdown
มี 2 หัวข้อได้แก่

 1. profile - สามารถดูข้อมูลส่วนตัวได้
 2. Logout - ออกจากระบบ
