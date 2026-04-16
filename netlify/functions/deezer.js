exports.handler = async function(event) {
  const path = event.queryStringParameters.path;
  if (!path) return { statusCode: 400, body: 'Missing path' };

  try {
    const res = await fetch('https://api.deezer.com' + path);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch(e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
