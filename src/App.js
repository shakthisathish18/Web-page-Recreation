// import logo from "./logo.svg";
import "./App.css";



function App() {
  return (
    <div class="parent">

      
      <div class="db"> 
      <h1 class="dashboard" >Dashboard</h1><break></break>
      <div class="dbleft">
      <div class= "lists"> 
        <div class="l one"><h4>Dashboard</h4></div>
        <div class="l two"><h4>Product</h4></div>
        <div class="l three"><h4>Customers</h4></div>
        <div class="l four"><h4>Income</h4></div>
        <div class="l five"><h4>Promote</h4></div>
        <div class="l six"><h4>Help</h4></div>
      </div>
      <div class="profile">
             <div class="spaceo"></div>
              

            <div class="prodet">

            <div class="proi"> <img class="proimg" height={70} width={40} style={{display:'flex',alignItems:'center',height:'70%',width:'6vw',padding:"10px",borderEndEndRadius:"10px"}} src="https://static.moviecrow.com/marquee/thalapathy-67-titled-leo-promo-feat-vijay-release-date-out/211836_thumb_665.jpg" alt="loading"></img></div>

              <select  class="popt">  
                <option value="user"> <bold>Leo Das</bold></option>
                <option value="user">Harold Das</option>
                <option value="user">Antony Das</option>
              </select>
            </div>    

            <div class="spacet"></div>

      </div>
      
      </div>
      </div>
      <div class="mainpage">
      
      

      <div  class="mpel">
      <div  class="mp welcome"><h3>Hello Leo,</h3></div>

      <div class="mp search">  {/*search-container<->mp search*/}
    {/* <form action="/action_page.php" > */}
      <input  class="searchbar" type="text" placeholder="Search" name="search" ></input>
    {/* </form> */}
      </div>
      <div  class="mp earn">
          <div class="ei"> <img class="icon" height={70} width={70} style={{display:'flex',alignItems:'center',height:'70%',width:'6vw',padding:"14px"}} src="https://th.bing.com/th/id/R.92d6077fb4e2df6622835f90abb26921?rik=%2bV58xBwPdi9gTg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_60944.png&ehk=zCYn3eI9tMFgUfyBuM88a32U9RQKt8bEyJ9n%2bKEndS4%3d&risl=&pid=ImgRaw&r=0" alt="loading"></img></div>
          <div class="es">
            <div><small >Earning</small></div>
            <div><b color="black">$198k</b></div>
            <div><b color="green">+37.8%</b> <small>this month</small></div>
          </div>
      </div> 
      <div  class="mp orders">
      <div class="ei o"> <img class="icon" height={70} width={40} style={{display:'flex',alignItems:'center',height:'70%',width:'6vw',padding:"14px"}} src="https://static.thenounproject.com/png/163899-200.png" alt="loading"></img></div>
          <div class="es">
            <div><small>Orders</small></div>
            <div><b color="black">$2.4k</b></div>
            <div><b color="red">-2%</b><small>this month</small></div>
          </div>
      </div>  
      <div  class="mp balance">
      <div class="ei b"> <img class="icon" height={70} width={40} style={{display:'flex',alignItems:'center',height:'80%',width:'6vw',padding:"10px"}} src="https://pixsector.com/cache/8acaf779/av379cb1a1c35cdcfee50.png" alt="loading"></img></div>
          <div class="es">
            <div><small>Balance</small></div>
            <div><b color="black">$2.4k</b></div>
            <div><b color="red">-2%</b> <small>this month</small></div>
          </div>
      </div>         
      <div  class="mp ts">
      <div class="ei t"> <img class="icon" height={0} width={0} style={{display:'flex',alignItems:"center",height:'50%',width:'4vw',padding:"25px"}} src="https://th.bing.com/th/id/R.5153eab5118b962e560cee8675aea8d9?rik=XaTCTNSNdqYKbw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_455529.png&ehk=hOS7fe8YMmzg3S2NH8kxoj1nqjkcnk1uzzIrxxGqB9I%3d&risl=&pid=ImgRaw&r=0" alt="loading"></img></div>
          <div class="es">
            <div><small >Total States</small></div>
            <div><b color="black">$89k</b></div>
            <div><b color="green">+11%</b> <small>this week</small></div>
          </div>
      </div>        
      <div  class="mp overview">
        <div class="ovone">
         <b color="black">Overview</b>
         <select  class="options">
           <option value="Quarterly">Quarterly</option>
           <option value="Monthly">Monthly</option>
           <option value="Yearly">Yearly</option>
         </select>
         </div>
      <div class="ovtwo"><small>Monthly Earning</small></div>
      <div class="ovthree">
      <div class="stats">
       <div class="state jan"></div>
       <div class="state feb"></div>
       <div class="state mar"></div>
       <div class="state apr"></div>
       <div class="state may"></div>
       <div class="state june"></div>
       <div class="state july"></div>
       <div class="state aug"></div>
       <div class="state sep"></div>
       <div class="state oct"></div>
       <div class="state nov"></div>
       <div class="state dec"></div>
      </div>
      <div class="calendar">
 <div class="month">Jan</div>
 <div class="month">Feb</div>
 <div class="month">Mar</div>
 <div class="month">Apr</div>
 <div class="month">May</div>
 <div class="month">Jun</div>
 <div class="month">Jul</div>
 <div class="month">Aug</div>
 <div class="month">Sep</div>
 <div class="month">Oct</div>
 <div class="month">Nov</div>
 <div class="month">Dec</div>

</div>
      </div>         
      </div>
      <div  class="mp customers">
           <div class="cus hd"><b>Customers</b><br></br><small>Customers that buy products</small></div>
           <div class="cus bd">

          <img class="piechart" height={70} width={40} style={{display:'flex',alignItems:'center',height:'70%',width:'70%',paddingLeft:"36px" ,paddingTop:"26px",borderRadius:"10px"}} src="https://img.favpng.com/14/6/0/donuts-pie-chart-png-favpng-L7jXPvbDmMySVEYbSB6iBS4nQ.jpg" alt="loading"></img>
          
           </div>
      </div>
      <div  class="mp ps">
        <div class="left">
          <div class="psell"> <b>Product Sell</b></div> 
          <div class="pname"><small>Product Name</small></div>
          <div class="imgo"> <img class="icon" height={70} width={40} style={{display:'flex',alignItems:'center',height:'50%',width:'7vw',padding:"14px",paddingLeft:"25px" ,borderRadius:"20px"}} src="https://images.hdqwalls.com/wallpapers/blue-sea-cave-4k.jpg" alt="loading"></img></div>
          <div class="imgao"><div><b>Abstract 3D</b></div><div><small>Loreum ipsum Sea, land of Sea </small></div></div>
          <div class="imgt">  <img class="icon" height={70} width={40} style={{display:'flex',alignItems:'center',height:'50%',width:'7vw',paddingLeft:"26px" ,borderRadius:"10px"}} src="https://th.bing.com/th/id/OIP.F6hI-ikOqzWbc-wSf7cGHQHaEo?pid=ImgDet&rs=1" alt="loading"></img> </div>
          <div class="imgat"><div><b>Sarphenus Illustration</b></div><div><small>Loreum ipsum Dollar Sit Amet, land of Mystery </small></div></div>
        </div> 
        <div class="right"> 
          <div class="ri sbar">  
             <input  class="sb" type="text" placeholder="Search" name="search" ></input>
              <select  class="opt">
                <option value="Quarterly">Last 30 days</option>
                <option value="Monthly">last 7 days</option>
                <option value="Yearly">Yesterday</option>
              </select>    
          </div>
          <div class="ri stock"><small>Stock</small></div>
          <div class="ri price"><small>price</small></div>
          <div class="ri tsales"><small>Total Sales</small></div>
          <div class="ri stocko"><bold>32 in stock</bold></div>
          <div class="ri po"><b>$ 45.99</b></div>
          <div class="ri tso"><bold>20</bold></div>
          <div class="ri stockt"><bold>32 in stock</bold></div>
          <div class="ri spt"><b>$ 45.99</b></div>
          <div class="ri tst"><bold>20</bold></div>
    


        </div> 
      </div>
      </div>

      </div>

      
    </div>
  );
}

export default App;
