import request from './_request';

async function getTrees() {
  try {
    const data = await request({
      url: '/ecosia-frontend-developer/trees.json',
      method: 'GET',
    });
    return { data };
  }
  catch(error) {
    console.log(error);
    return { error };
  }
}

export default {
  getTrees,
};