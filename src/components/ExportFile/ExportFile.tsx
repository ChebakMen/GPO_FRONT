import '../../styles/ExportFile.css';
import {FC} from 'react'
import {ReactComponent as DownloadSWG} from "../../images/down.svg"
const ExamplePdf = require('./example.pdf');

const ExportFile:FC = () => {

    const handleDownloadPdf = async () => {
        try {
            //поменять ссылку
          const response = await fetch('https://run.mocky.io/v3/b8e3686f-c76b-44d5-8928-10394b2a5d0b');
          if (!response.ok) {
            throw new Error('Failed to download PDF');
          }
          const data = await response.json();
          
          // Получаем URL PDF файла из ответа
          const pdfUrl = data.url;
    
          // Создаем ссылку для скачивания PDF
          const a = document.createElement('a');
          a.href = pdfUrl;
          a.download = 'file.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(pdfUrl);
          document.body.removeChild(a);
        } catch (error) {
          console.error('Error downloading PDF:', error);
        }
      };

    return(
        <div className="exportfile">
            <div className="exportfile__container">
                <div className="exportfile__title">Загрузить себе на устройство</div>
                <div className="exportfile__download">
                    
                    <button onClick={handleDownloadPdf} className="exportfile__download-btn">
                        <div className="exportfile__download-btn-img">
                            <DownloadSWG width={50} height={50} />
                        </div>
                        Скачать PDF
                    </button>
                    {/* <a  href={ExamplePdf}
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                        className="exportfile__download-btn">
                            <div className="exportfile__download-btn-img">
                                <DownloadSWG width={50} height={50} />
                            </div>
                            Скачать PDF
                    </a> */}
                    
                </div>
            </div>
        </div>
    )
};
export default ExportFile;