import "./styles.css";

const onClickadd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストにTODOを追加
  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // TODO内容テキストを取得
    const text = li.innerText;
    // div以下を初期化
    div.textContent = null;
    // liタグ生成
    const newLi = document.createElement("li");
    newLi.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(newLi);
    div.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  // 削除ボタンを追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
