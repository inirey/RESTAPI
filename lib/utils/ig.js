const ig = require("instatouch");
const dotenv = require('dotenv').config()
const sID = process.env.sID;

const options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
  session: "sessionid=" + sID
};

async function igStalk(username = 'instagram') {
  return new Promise((resolve, reject) => {
    try {
      ig.getUserMeta(username, options)
        .then((data) => {
          resolve({
            result: {
              profile: data.graphql.user.profile_pic_url,
              profilehd: data.graphql.user.profile_pic_url_hd,
              fullname: data.graphql.user.full_name,
              private: data.graphql.user.is_private,
              verified: data.graphql.user.is_verified,
              bio: data.graphql.user.biography,
              follower: data.graphql.user.edge_followed_by.count,
              following: data.graphql.user.edge_follow.count,
              conneted_fb: data.graphql.user.connected_fb_page,
              videotimeline: data.graphql.user.edge_felix_video_timeline.count,
              timeline: data.graphql.user.edge_owner_to_timeline_media.count,
              savedmedia: data.graphql.user.edge_saved_media.count,
              collections: data.graphql.user.edge_media_collections.count
            }
          });
        })
        .catch((err) =>
          reject({
            message: "akun tidak di temukan atau username tidak valid"
          })
        );
    } catch (err) {
      reject(err);
    }
  });
}

async function igDownload(url) {
  return new Promise((resolve, reject) => {
    if (url === 'undefined') { 
      reject({
        msg: 'Masukkan URL nya.'
      })
    }
    url = url.split('?')[0];
      try {
      ig.getPostMeta(url, options)
      .then(data =>
        resolve({
          id: data.graphql.shortcode_media.id,
          shortCode: data.graphql.shortcode_media.shortcode,
          caption: data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text,
          url: data.graphql.shortcode_media.display_url
        })
      )
    } 
    catch(err) {
      reject({
        status: 406,
        creator: '@only_fxc7',
        msg: "Link Tidak Valid"
      })
    }
  })
}

module.exports = {
  igStalk,
  igDownload
};