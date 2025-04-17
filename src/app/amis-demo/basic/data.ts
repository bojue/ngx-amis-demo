export const schema = {
  type: "page",
  title: "这是 AMIS Basic 页面 ",
  body: [
    {
      type: "form",
      mode: "horizontal",
      api: "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm",
      body: [
        {
          label: "Name",
          type: "input-text",
          name: "name",
        },
        {
          label: "Email",
          type: "input-email",
          placeholder: "请输入邮箱地址",
          name: "email",
        },
        {
          type: 'editor',
          name: 'js',
          label: 'JS',
          language: 'javascript',
        }
      ],
    },
  ],
};