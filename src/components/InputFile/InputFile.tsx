import '../../styles/InputFile.css';
import {FC} from 'react'

const InputFile:FC = () => {
  
    return(
      <div className="input-file__container container">
        <div className="input-file__block ">
          
          <form id="input-file__block-cont" method="POST" action="send.php">
            <img className="input-file__image" src="images/up.svg" />
            <div>
                 <input id="file-input" type="file" name="file" multiple/>
                 <label className="file-input">Выберите файл</label>
                 <span>или перетащите его сюда</span>
            </div>
          </form>
          <div className="input-file__info">
              <h1 className="input-file__info-title">Информация о файле</h1>
              <table className="input-file__info-table">
                <tbody>
                  <tr>
                    <td className="info-table-item ">
                      Название
                    </td>
                    <td className="info-table-item info-table-item_user">
                      Video_123
                    </td>
                  </tr>

                  <tr>
                    <td className="info-table-item">
                      Размер
                    </td>
                    <td className="info-table-item info-table-item_user">
                      20 MB
                    </td>
                  </tr>

                  <tr>
                    <td className="info-table-item">
                      Тип
                    </td>
                    <td className="info-table-item info-table-item_user">
                      MP4
                    </td>
                  </tr>

                  <tr>
                    <td className="info-table-item">
                      Продолжительность
                    </td>
                    <td className="info-table-item info-table-item_user">
                      2 мин.
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>

    )
}
export default InputFile;