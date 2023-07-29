# cookie-session-server
實驗使用cookie和session存放資料的差別
## cookie存放資料
- 用於儲存無敏感性資料，減輕伺服器負擔
- 可設定HttpOnly，讓js不能存取，依照功能而定
## session存取資料
- 有效控制時效性
- 只放重要資料
- 較為消耗伺服器資源

## 結論
- 就一起用
- 兩者各司其職