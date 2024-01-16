export default defineEventHandler(async (event) => {
  const data = await $fetch("https://random-data-api.com/api/v2/users?size=1");
  console.log(data);
  return {
    data,
  };
});
