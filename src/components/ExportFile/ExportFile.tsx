import '../../styles/ExportFile.css';
import {FC} from 'react'
import {ReactComponent as DownloadSWG} from "../../images/down.svg"
const ExamplePdf = require('./example.pdf');

const ExportFile:FC = () => {
    return(
        <div className="exportfile">
            <div className="exportfile__container">
                <div className="exportfile__title">Загрузить себе на устройство</div>
                <div className="exportfile__download">
                    
                        
                    <a  href={ExamplePdf}
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                        className="exportfile__download-btn">
                            <div className="exportfile__download-btn-img">
                                <DownloadSWG width={50} height={50} />
                            </div>
                            Скачать PDF
                    </a>
                    
                </div>
            </div>
        </div>
    )
};
export default ExportFile;