import garis from '../assets/garis.png'
import orang from '../assets/orang.png'
import './../css/style.css'
import styling from './../css/modulecss.css'

const Cardprofile = () => {
    return (
        // 1.inline CSS (css nya di dalam)
        <div style={{
            backgroundColor: "#00B6DF",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${garis})`,
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {/* 2.menggunakan css biasa */}
            <div className='card'>
                <img src={orang} />
                <div className="judul">Front End Develper</div>
                <div className="nama">Ignasius Sigit</div>
                <div className="diskripsi">Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to</div>
                <button className='button'>Contack</button>
            </div>

            {/* 3.menggunaka CSS module */}
            <div className='card'>
                <img src={orang} />
                <div className="judul">Front End Develper</div>
                <div className="nama">Ignasius Sigit</div>
                <div className="diskripsi">Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to</div>
                <button className={styling.button}>Contack</button>
            </div>

        </div>
    )
}

export default Cardprofile;