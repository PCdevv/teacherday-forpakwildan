import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import styles from '../styles/style.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="grid h-32 text-center place-items-center text-black font-bold">
        <h1 className='text-5xl'>SELAMAT HARI GURU, for Pak Wildan</h1>
      </div>
      <section>
        <div className="container" id="object">
                <div className="row">
                    <div id="box1" className="box"></div>
                    <div id="box2" className="box"></div>
                </div>
                <div className="row">
                    <div id="box3" className="box"></div>
                    <div id="box4" className="box"></div>
                </div>
                <div className="row">
                    <div className="circle"></div>
                </div>
                <div className="row">
              <div id="line" className="line"></div>
                </div>
                <div className="row">
              <div id="pot" className="pot"></div>
                </div>
        </div>
	    </section>
      <div>
        <div className="grid h-32 text-center place-items-center text-black font-bold">
            <h1 className='text-2xl'>Pesan & Kesan selama (hampir) 1 Semester</h1>
        </div>
        <div className="my-10 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 text-center place-items-center">
          <div className="my-2 card w-96 bg-success-content text-white shadow-xl">
            <div className="card-body">
              <p>- ke pasar beli bola sepak, arigatou udah jdi guru yg baik pak{'>'}{'<'} -nisanimek</p>
              <p>- guru paling asik dlm sejarah kehidupan gweh ~Puteri:v</p>
              <p>- gg geming pak -zidan</p>
              <p>- semoga tabah menghadapi kami pak -Zaxzz</p>
              <p>- guru terhumble yg pernah gw temui -sitie</p>
              <p>- guru ter the best-vivi</p>
              <p>- guru sekaligus temen -citra</p>
              <p>-apapun yang terjadi, semoga selalu kuat pakk -nadya</p>
              <p>- terimakasih pak sudah kuat menghadapi kelas ini -rahma</p>
              <p>- ah kosek -ayyaa</p>
            </div>
          </div>
          <div className="my-2 card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 py-5">
              <Image className='rounded-md' src="/../public/img/pakwil.jpg" width={300} height={400}/>
            </figure>
          </div>
          <div className="bg-success-content text-white my-2 card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <p>- makasih aja -nopal</p>
            <p>- Pak kangen :3 - Farrel</p>
            <p>- Sehat terus pak- Karin</p>
            <p>- semoga pak wildan 2 periode #dukungpakwildan2periode -dindaa</p>
            <p>- Adam : Buah rambutan, buah duren, kalo bukan pak Wildan gak Kane menn🥵👉🏻👈🏻</p>
            <p>- Terimakasih tidak pernah mengusir kami dari Lab Pak, Terimakasih juga tips contekannya, dan #PantauFarrel 😅🙏🏼 - Vladimir Rangkowski</p>
            <p>-Semoga Tetap Sabar dan Ikhlas mengajar kami Pak... uraaa🔥 (DenDhimas)</p>
            <p>-maaf dan terimakasih pak (Yogs)</p>
            <p>-tetap harus menjalankan sholat dan sunnah Nabi - Acop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 grid text-center place-items-center">
        <div className="grid h-32 text-center place-items-center text-black font-bold">
          <h1 className='text-2xl'>XI PPLG 1? Solid!Solid!Solid!</h1>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-5 py-5">
            <Image className='rounded-md' src="/../public/img/solid.jpg" width={300} height={400}/>
          </figure>
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
