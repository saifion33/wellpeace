import { CiSearch } from "react-icons/ci";
function Home() {
    return (
      <div
        className="relative flex items-start justify-center"
        style={{
          backgroundImage: 'linear-gradient(180deg, #b1baff, #eea9e8)',
          minHeight: '122vh',
        }}
      >
        <div className="absolute top-1 w-full max-w-md p-4">
          <h2 className="text-left font-montserrat drop-shadow-md pl-2 tracking-tight text-[17px] font-bold text-[#FFF5E9]">
            Welcome!
          </h2>
          <h2 className="text-left font-montserrat drop-shadow-md pl-2 tracking-tight text-[12px] font-bold text-[#000000]" style={{ marginTop: '-0.3rem' }}>
            Connect.Learn.Thrive
          </h2>
          <CiSearch className="text-black absolute top-18.6 right-8.2" style={{
  fontSize: '1.2rem',
  fontWeight: 'bold',
  position: 'absolute',
  top: '4.75rem',
  right: '2.05rem',
}}/>
          <form className="mt-4 space-y-6" action="#" method="POST">
            <input
              placeholder="Explore"
              id="new-password"
              name="new-password"
              type="text"
              required
              className="block w-full rounded-lg border-0 pl-3 pr-12 py-1"
            />
          </form>
        </div>
      </div>
    );
  }
  
  export default Home;
  