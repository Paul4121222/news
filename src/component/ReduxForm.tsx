import React from "react";
import { Field, reduxForm, InjectedFormProps} from "redux-form";
import { connect } from "react-redux";
import { searchKey, word } from "../action";

interface IReduxFormProps {
  searchKey: (keyWord: string) => void,
  word: (keyWord: string) => void,
}

//定義表單欄位型別
//欄位名稱與型別
interface FormData {
  keyWord: string
}

//InjectedFormProps不會自動引入IReduxFormProps的props型別，所以需手動包含
type Props = IReduxFormProps & InjectedFormProps<FormData, IReduxFormProps>

interface IFormError {
  keyWord?: string
}

class ReduxForm extends React.Component<Props> {
  renderInput({ input }: { input: any }) {
    return (
      <input
        {...input}
        autoComplete="off"
        placeholder="Please input any keyword"
      />
    );
  }

  onSubmit = (formValue: FormData) => {
    this.props.searchKey(formValue.keyWord);
    this.props.word(formValue.keyWord);
  };

  render() {
    return (
      <form
        className="inputForm"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="keyWord" component={this.renderInput} />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

const valid = (data: FormData) => {
  let error: IFormError = {};
  if (!data.keyWord) {
    error.keyWord = "沒輸入";
  }
  return error;
};

//reduxForm的validate，須回傳包含表單欄位錯誤的物件
//reduxForm本身是泛型函數
const formInput = reduxForm<FormData, IReduxFormProps>({
  form: "inputForm",
  validate: valid,
})(ReduxForm);

export default connect(null, { searchKey, word })(formInput);
