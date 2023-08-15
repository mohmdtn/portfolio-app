import Image from "next/image";

export const Qoute = () => {
  return (
    <section className="qoute">
      <div className="row m-0">
        <div className="col-md-5 text-center">
          <Image src="/pictures/about.jpg" alt="mohammad taghinasab" width={369} height={500} />
        </div>
        <div className="col-md-7">
          <h3>Qoute...</h3>
          <p>Hello, I'm Mohammad Taghinasab, a 23-year-old individual from the charming city of Babol. Armed with a Bachelor's degree in Computer Engineering, with a specialized focus on Software, I proudly hail from Babol University of Science and Technology. Presently, my academic pursuit takes me into the realm of Artificial Intelligence, as I ambitiously undertake a Master's degree. My tryst with the world of professional web development began roughly 3.5 years ago. Since then, I have been deeply engrossed in both the art of frontend and backend programming, each offering its unique challenge and charm. My fervent desire for learning fuels my enthusiasm, constantly driving me to embrace new technologies and ideas.</p>
        </div>
      </div>
    </section>
  )
}
