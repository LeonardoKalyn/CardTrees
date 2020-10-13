import request from './_request';

async function getTrees() {
  try {
    const data = await request({
      url: '/ecosia-frontend-developer/trees.json',
      method: 'GET',
    });
    return { data: data.trees };
  }
  catch(error) {
    return { error };
  }
}

export default {
  getTrees,
};