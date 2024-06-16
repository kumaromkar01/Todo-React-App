function Items({items,deleted}) {
      let todoname = "Buy Milk";
      let todoDate = "04/10/2023";
      return (
            <div class="container">
                  <div class="row kg-row">
                        {
                              items.map((item)=>(
                                    <>
                                    <div class="col-6" >{item.task}</div>
                                    <div class="col-4">{item.Date}</div>
                                    <div class="col-2">
                                          <button type="button" class="kg-button" id={item.task} onClick={deleted}>
                                                Delete
                                          </button>
                                    </div>
                                    </>
                              ))
                        }
                        
                  </div>
            </div>
      );
}

export default Items;
