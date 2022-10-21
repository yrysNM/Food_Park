export const Design = (props) => {
    <>
      <div className="modal logout-modal">
        <div className="modal__inner logout-modal__inner">
          <div className="modal__content logout-modal__content">
            <button className="close__btn logout_close-btn" onClick={props.close}>
              <img src={props.Close} alt="" />
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </>
};