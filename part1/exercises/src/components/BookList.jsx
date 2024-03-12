export default function BookList() {
   let pageTitle = "Good Reads";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/5/51/Coldestwinter.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Midnight_Gangster.jpg/220px-Midnight_Gangster.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/8/8a/ADayLateAndADollarShort.jpg";

   return (
      <div className="BookList">
         <h3>{pageTitle}</h3>
         <img className="BookList" src={book1} alt="The Coldest Winter Ever!" height="275px" width="250px"/>
         <img className="BookList" src={book2} alt="Midnight: A Gansters Tale!" height="275px" width="250"/>
         <img className="BookList" src={book3} alt="A Day Late And A Dollar Short!" height="275px"/>
      </div>      
   );
}