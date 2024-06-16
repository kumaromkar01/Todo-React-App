function Addtodo({setStateChange}) {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="ENTER TODO HERE" />
        </div>
        <div class="col-4">
          <input type="date"  />
        </div>
        <div class="col-2">
          <button type="button " class="btn btn-success kg-button" onClick={setStateChange}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
