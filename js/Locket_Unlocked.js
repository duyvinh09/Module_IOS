// ============================================================
// Locket Remote Config Rewrite
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// Tác giả: @duyvinh09
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

// Chỉ can thiệp khi request đến từ app Locket
if (ua.includes("Locket")) {
    obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

    // ============================================================
    // NHÓM 1: FEATURE GATES — mở khóa toàn bộ tính năng
    // ============================================================
    obj.entries.feature_gates = JSON.stringify({
        app_icon_picker: "enabled",
        camera_roll: "enabled",
        camera_theme: "enabled",
        locket_views: "enabled",
        long_captions: "enabled",
        longer_video: "enabled",
        unlimited_friends: "enabled",
        priority_support: "enabled",
        profile_badge: "enabled",
        remove_ads: "enabled",
        video: "enabled",
        custom_widget_frames: "enabled",
        streak_recovery: "enabled",
    });

    // ============================================================
    // NHÓM 2: QUẢNG CÁO — tắt hoàn toàn
    // ============================================================
    obj.entries.history_ads_mode = "off";
    obj.entries.history_ads_prefetch_count = "0";
    obj.entries.history_ads_prefetch_immediate = "false";
    obj.entries.history_ads_prefetch_reroute = "false";
    obj.entries.history_ads_dynamic_insertion = "false";
    obj.entries.history_ads_refresh_prefetch_on_foreground = "false";
    obj.entries.history_ads_floor_price = "0";
    obj.entries.history_ads_floor_price_att = "0";
    obj.entries.history_ad_log_displayed_on_background = "false";
    obj.entries.history_ads_debug_menu = "false";

    // ============================================================
    // NHÓM 3: MOMENT VIEWS — xem ai đã xem
    // ============================================================
    obj.entries.moment_views_enabled = "true";
    obj.entries.moment_views_v2 = "true";
    obj.entries.record_moment_views = "true";
    obj.entries.notify_moment_views = "true";
    obj.entries.get_moment_views_as_cloud_function = "true";
    obj.entries.moment_reactions_v2 = "true";

    // ============================================================
    // NHÓM 4: BẠN BÈ — bỏ giới hạn
    // ============================================================
    obj.entries.max_friends_count = "9999";
    obj.entries.friend_limit_mode = "0";
    obj.entries.soft_friend_limit_threshold_count = "9999";
    obj.entries.show_friend_limit_on_cam = "false";
    obj.entries.signup_max_friends_count = "9999";
    obj.entries.celebrity_inbox_limit = "9999";
    obj.entries.friend_limit_geo_override = JSON.stringify({experiments: {}, area_code_overrides: {},});

    // ============================================================
    // NHÓM 5: OVERLAY / CAPTION — mở rộng
    // ============================================================
    obj.entries.overlay_dynamic_captions = JSON.stringify(["standard", "location", "weather", "time",]);
    obj.entries.overlay_navigator_enabled = "true";
    obj.entries.overlays_v2_config = JSON.stringify({suggestions_enabled: true,});
    obj.entries.captions_enabled = "true";
    obj.entries.music_caption_enabled = "true";
    obj.entries.music_caption_song_preview_enabled = "true";
    obj.entries.link_caption_link_enabled = "true";
    obj.entries.overlay_items = JSON.stringify([
        {
            section: "🌸 General",
            items: [
                { overlay_id: "caption:standard", source: "local", caption: { type: "standard" }, },
                { overlay_id: "caption:review", source: "local", caption: { type: "review" }, },
                { overlay_id: "caption:music", source: "local", caption: { type: "music" }, },
                { overlay_id: "caption:location", source: "local", caption: { type: "location" }, },
                { overlay_id: "caption:weather", source: "local", caption: { type: "weather" }, },
                { overlay_id: "caption:time", source: "local", caption: { type: "time" }, },
                { overlay_id: "caption:streak", source: "local", caption: { type: "streak" }, },
                { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" }, },
                { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                { overlay_id: "caption:color", source: "local", caption: { type: "color" } },
            ],
        },
        {
            section: "🌸 Special Events",
            items: [
                {
                    overlay_id: "caption:halloween_2026",
                    source: "remote",
                    caption: {
                        background: { colors: ["#150804", "#C8540D"] },
                        icon: { data: "🎃", type: "emoji" },
                        max_lines: 1,
                        text: "Halloween",
                        localized_text: { en: "Halloween", vn: "Halloween" },
                        text_color: "#FFB182",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:christmas_eve_2026",
                    source: "remote",
                    caption: {
                        background: { colors: ["#2FA85F", "#176B3A"] },
                        icon: { data: "🕯️", type: "emoji" },
                        max_lines: 1,
                        text: "Giáng sinh an lành",
                        localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" },
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:christmas_day_2026",
                    source: "remote",
                    caption: {
                        background: { colors: ["#E53935", "#A81818"] },
                        icon: { data: "🎄", type: "emoji" },
                        max_lines: 1,
                        text: "Giáng sinh an lành",
                        localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" },
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:new_years_eve_2026",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFC64B", "#FFEDBF"] },
                        icon: { data: "🥂", type: "emoji" },
                        max_lines: 1,
                        text: "Xin chào 2027!",
                        localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" },
                        text_color: "#643F00",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:new_years_day_2027",
                    source: "remote",
                    caption: {
                        background: { colors: ["#3B00EC", "#823FFF"] },
                        icon: { data: "💫", type: "emoji" },
                        max_lines: 1,
                        text: "Xin chào 2027!",
                        localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" },
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:new_years_day_2027_alternate",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF0062", "#FF783F"] },
                        max_lines: 1,
                        text: "2027",
                        localized_text: { en: "2027", vn: "2027" },
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
            ],
        },
        {
            section: "🌸 Decorative by Locket",
            items: [
                {
                    overlay_id: "caption:party_time",
                    source: "remote",
                    caption: {
                        background: { colors: ["#5EFFF5", "#FCFF57"] },
                        icon: { data: "🪩", type: "emoji" },
                        max_lines: 1,
                        text: "Party Time!",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" }, },
                {
                    overlay_id: "caption:good_morning",
                    source: "remote",
                    daily_start_hour: 5,
                    daily_end_hour: 10,
                    caption: {
                        background: { colors: ["#EF7402", "#EABF0F"] },
                        icon: { data: "☀️", type: "emoji" },
                        max_lines: 1,
                        text: "Good morning",
                        text_color: "#FFFFFFE5",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:goodnight",
                    source: "remote",
                    daily_start_hour: 19.5,
                    daily_end_hour: 24,
                    caption: {
                        background: { colors: ["#370C6F", "#575CD4"] },
                        icon: { data: "🌙", type: "emoji" },
                        max_lines: 1,
                        text: "Goodnight",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ootd",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFFFFF", "#DBDBDB"] },
                        icon: { data: "🕶", type: "emoji" },
                        max_lines: 1,
                        text: "OOTD",
                        text_color: "#101010E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:miss_you",
                    source: "remote",
                    caption: {
                        background: { colors: ["#EC0C00", "#FF493F"] },
                        icon: { data: "🥰", type: "emoji" },
                        max_lines: 1,
                        text: "Miss you",
                        text_color: "#FFFFFFDB",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Độc lạ",
            items: [
                {
                    overlay_id: "caption:xin_vinh_biet_cu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#232526", "#414345"] },
                        icon: { data: "🕯️", type: "emoji" },
                        max_lines: 1,
                        text: "Xin vĩnh biệt cụ",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:chay_ngay_di",
                    source: "remote",
                    caption: {
                        background: { colors: ["#D31027", "#EA384D"] },
                        icon: { data: "🏃💨", type: "emoji" },
                        max_lines: 1,
                        text: "Chạy ngay đi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:cu_tu_tu_khoai_se_nhu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#56AB2F", "#A8E063"] },
                        icon: { data: "🥔", type: "emoji" },
                        max_lines: 1,
                        text: "Cứ từ từ khoai sẽ nhừ",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:kiem_tra_nhan_pham",
                    source: "remote",
                    caption: {
                        background: { colors: ["#654EA3", "#EAAFC8"] },
                        icon: { data: "🎲", type: "emoji" },
                        max_lines: 1,
                        text: "Kiểm tra nhân phẩm",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:doc_so_tai_khoan",
                    source: "remote",
                    caption: {
                        background: { colors: ["#1E90FF", "#00D4FF"] },
                        icon: { data: "💳", type: "emoji" },
                        max_lines: 1,
                        text: "đọc số tài khoản",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ai_so_thi_di_ve",
                    source: "remote",
                    caption: {
                        background: { colors: ["#B71C1C", "#FF5722"] },
                        icon: { data: "🏃", type: "emoji" },
                        max_lines: 1,
                        text: "ai sợ thì đi về",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:con_cai_nit",
                    source: "remote",
                    caption: {
                        background: { colors: ["#D7CCC8", "#8D6E63"] },
                        icon: { data: "🧶", type: "emoji" },
                        max_lines: 1,
                        text: "còn cái nịt",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:canh_bao_co_hat",
                    source: "remote",
                    caption: {
                        background: { colors: ["#9C27B0", "#E91E63"] },
                        icon: { data: "🎤", type: "emoji" },
                        max_lines: 1,
                        text: "cảnh báo có hát",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:than_chua_ma_don",
                    source: "remote",
                    caption: {
                        background: { colors: ["#607D8B", "#37474F"] },
                        icon: { data: "😔", type: "emoji" },
                        max_lines: 1,
                        text: "Thân chưa mà dỡn",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ai_muon",
                    source: "remote",
                    caption: {
                        background: { colors: ["#E91E63", "#F44336"] },
                        icon: { data: "🤔", type: "emoji" },
                        max_lines: 1,
                        text: "Ai mượn?",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:hay_ra_de_qua_a",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFF59D", "#80DEEA"] },
                        icon: { data: "🥺", type: "emoji" },
                        max_lines: 1,
                        text: "Hay ra dẻ quá à!",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:giam_suc_manh_con_tuong",
                    source: "remote",
                    caption: {
                        background: { colors: ["#4CAF50", "#00BCD4"] },
                        icon: { data: "🎮", type: "emoji" },
                        max_lines: 1,
                        text: "Giảm sức mạnh con tướng",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:mac_co_qua_hai_oi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFB74D", "#F8BBD0"] },
                        icon: { data: "😭", type: "emoji" },
                        max_lines: 1,
                        text: "Mắc cỡ quá hai ơi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:minh_la_lop",
                    source: "remote",
                    caption: {
                        background: { colors: ["#263238", "#455A64"] },
                        icon: { data: "🛞", type: "emoji" },
                        max_lines: 1,
                        text: "Mình là lốp",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:dep_trai_co_gi_sai",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF5722", "#FFC107"] },
                        icon: { data: "😎", type: "emoji" },
                        max_lines: 1,
                        text: "Đẹp trai có gì sai",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:mong_ton_hoa_sen",
                    source: "remote",
                    caption: {
                        background: { colors: ["#D8B4E2", "#F8BBD0"] },
                        icon: { data: "🪷", type: "emoji" },
                        max_lines: 1,
                        text: "Mong tôn hoa sen thấy cảnh này",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:dam_nhau_khong",
                    source: "remote",
                    caption: {
                        background: { colors: ["#E53935", "#FF7043"] },
                        icon: { data: "🥊", type: "emoji" },
                        max_lines: 1,
                        text: "đấm nhau không",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:sieu_cap_ba_khi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#EC407A", "#F44336"] },
                        icon: { data: "🐉", type: "emoji" },
                        max_lines: 1,
                        text: "siêu cấp bá khí",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:du_an_ma",
                    source: "remote",
                    caption: {
                        background: { colors: ["#263238", "#455A64"] },
                        icon: { data: "👻", type: "emoji" },
                        max_lines: 1,
                        text: "dự án ma",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Trend TikTok",
            items: [
                {
                    overlay_id: "caption:tuyet_doi_khong_nghe",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF416C", "#FF4B2B"] },
                        icon: { data: "🙉", type: "emoji" },
                        max_lines: 1,
                        text: "Tuyệt đối không nghe",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:flex_den_hoi_tho_cuoi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#F7971E", "#FFD200"] },
                        icon: { data: "💎", type: "emoji" },
                        max_lines: 1,
                        text: "Flex đến hơi thở cuối",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:overthinking_vai_chuong",
                    source: "remote",
                    caption: {
                        background: { colors: ["#2C3E50", "#4CA1AF"] },
                        icon: { data: "🤯", type: "emoji" },
                        max_lines: 1,
                        text: "Overthinking vai chưởng",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ke_chuyen_nghe_choi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#8A2387", "#E94057"] },
                        icon: { data: "🍿", type: "emoji" },
                        max_lines: 1,
                        text: "Kể chuyện nghe chơi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:xinh_dep_tuyet_voi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FC5C7D", "#6A82FB"] },
                        icon: { data: "💅", type: "emoji" },
                        max_lines: 1,
                        text: "Xinh đẹp tuyệt vời",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:tram_cam_nhe",
                    source: "remote",
                    caption: {
                        background: { colors: ["#1F1C2C", "#928DAB"] },
                        icon: { data: "🫠", type: "emoji" },
                        max_lines: 1,
                        text: "Trầm cảm nhẹ",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:chua_du_wow",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF5349", "#EB0C00"] },
                        icon: { data: "⭐", type: "emoji" },
                        max_lines: 1,
                        text: "Chưa đủ wow",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:boc_trung_sit_rit",
                    source: "remote",
                    caption: {
                        background: { colors: ["#9C27B0", "#7B1FA2"] },
                        icon: { data: "🎁", type: "emoji" },
                        max_lines: 1,
                        text: "Bóc trúng sít rịt",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:hen_lam_moi_xui_duoc_vay_a",
                    source: "remote",
                    caption: {
                        background: { colors: ["#00BCD4", "#0097A7"] },
                        icon: { data: "😅", type: "emoji" },
                        max_lines: 1,
                        text: "Hèn lắm mới xui được vậy á",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ra_duong_ne_moi_anh",
                    source: "remote",
                    caption: {
                        background: { colors: ["#2196F3", "#1976D2"] },
                        icon: { data: "👤", type: "emoji" },
                        max_lines: 1,
                        text: "Ra đường nể mỗi anh",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:cung_cung_di",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFC107", "#FFA000"] },
                        icon: { data: "🚀", type: "emoji" },
                        max_lines: 1,
                        text: "Cũng cứng đi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:tuyet_doi_dien_anh",
                    source: "remote",
                    caption: {
                        background: { colors: ["#455A64", "#263238"] },
                        icon: { data: "📷", type: "emoji" },
                        max_lines: 1,
                        text: "Tuyệt đối điện ảnh",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:du_ba_khi_chua",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF5722", "#E64A19"] },
                        icon: { data: "⚡", type: "emoji" },
                        max_lines: 1,
                        text: "Dù bá khí chưa",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ua_alo",
                    source: "remote",
                    caption: {
                        background: { colors: ["#9C27B0", "#7B1FA2"] },
                        icon: { data: "❓", type: "emoji" },
                        max_lines: 1,
                        text: "Ủa alo?",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:cai_gi_du_vay_troi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#F44336", "#D32F2F"] },
                        icon: { data: "❗", type: "emoji" },
                        max_lines: 1,
                        text: "Cái gì dữ vậy trời",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:nay_la_het_cuu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#607D8B", "#455A64"] },
                        icon: { data: "❌", type: "emoji" },
                        max_lines: 1,
                        text: "Này là hết cứu",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:qua_la_dien_anh",
                    source: "remote",
                    caption: {
                        background: { colors: ["#26A69A", "#00897B"] },
                        icon: { data: "📷", type: "emoji" },
                        max_lines: 1,
                        text: "Quá là điện ảnh",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Cười xỉu",
            items: [
                {
                    overlay_id: "caption:cuoi_xiu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFEB3B", "#FF9800"] },
                        icon: { data: "😎", type: "emoji" },
                        max_lines: 1,
                        text: "Cười xỉu",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:toang_that_roi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#F44336", "#B71C1C"] },
                        icon: { data: "🐉", type: "emoji" },
                        max_lines: 1,
                        text: "Toang thật rồi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:toi_roi_toi_roi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#673AB7", "#512DA8"] },
                        icon: { data: "❗", type: "emoji" },
                        max_lines: 1,
                        text: "Tới rồi tới rồi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:khong_the_tin_noi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#00BCD4", "#0097A7"] },
                        icon: { data: "❓", type: "emoji" },
                        max_lines: 1,
                        text: "Không thể tin nổi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Đời sống",
            items: [
                {
                    overlay_id: "caption:ngay_moi_vui_ve",
                    source: "remote",
                    caption: {
                        background: { colors: ["#4CAF50", "#2E7D32"] },
                        icon: { data: "☀️", type: "emoji" },
                        max_lines: 1,
                        text: "Ngày mới vui vẻ",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ngu_ngon",
                    source: "remote",
                    caption: {
                        background: { colors: ["#3F51B5", "#1A237E"] },
                        icon: { data: "🌙", type: "emoji" },
                        max_lines: 1,
                        text: "Ngủ ngon",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:an_com_chua",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF9800", "#F57C00"] },
                        icon: { data: "🍽️", type: "emoji" },
                        max_lines: 1,
                        text: "Ăn cơm chưa?",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:di_choi_khong",
                    source: "remote",
                    caption: {
                        background: { colors: ["#E91E63", "#C2185B"] },
                        icon: { data: "✈️", type: "emoji" },
                        max_lines: 1,
                        text: "Đi chơi không?",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Gen Z Slay",
            items: [
                {
                    overlay_id: "caption:tinh_hoa_hoi_tu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFD700", "#FF8C00"] },
                        icon: { data: "✨", type: "emoji" },
                        max_lines: 1,
                        text: "Tinh hoa hội tụ",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:phu_tinh_khong_phu_ban",
                    source: "remote",
                    caption: {
                        background: { colors: ["#8E2DE2", "#4A00E0"] },
                        icon: { data: "🕶️", type: "emoji" },
                        max_lines: 1,
                        text: "Phụ tình không phụ bản",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:ngoan_xinh_yeu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FFAFBD", "#FFC3A0"] },
                        icon: { data: "🌸", type: "emoji" },
                        max_lines: 1,
                        text: "Ngoan xinh yêu của ai?",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:nhin_la_biet_uy_tin",
                    source: "remote",
                    caption: {
                        background: { colors: ["#2980B9", "#2C3E50"] },
                        icon: { data: "👌", type: "emoji" },
                        max_lines: 1,
                        text: "Nhìn là biết uy tín",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Bất ổn & Khó đỡ",
            items: [
                {
                    overlay_id: "caption:luon_vui_tuoi",
                    source: "remote",
                    caption: {
                        background: { colors: ["#00F2FE", "#4FACFE"] },
                        icon: { data: "🤡", type: "emoji" },
                        max_lines: 1,
                        text: "Luôn vui tươi",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:bat_on_that_su",
                    source: "remote",
                    caption: {
                        background: { colors: ["#636363", "#A2AB58"] },
                        icon: { data: "🫠", type: "emoji" },
                        max_lines: 1,
                        text: "Bất ổn thật sự",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:khong_cam_xuc",
                    source: "remote",
                    caption: {
                        background: { colors: ["#434343", "#000000"] },
                        icon: { data: "🗿", type: "emoji" },
                        max_lines: 1,
                        text: "Không cảm xúc",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:phu_huynh_dung_xem",
                    source: "remote",
                    caption: {
                        background: { colors: ["#FF0844", "#FFB199"] },
                        icon: { data: "🙈", type: "emoji" },
                        max_lines: 1,
                        text: "Phụ huynh đừng xem",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Check VAR & Hóng hớt",
            items: [
                {
                    overlay_id: "caption:check_var",
                    source: "remote",
                    caption: {
                        background: { colors: ["#11998E", "#38EF7D"] },
                        icon: { data: "📺", type: "emoji" },
                        max_lines: 1,
                        text: "Check VAR liền",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:qua_nhieu_su_de_thuong",
                    source: "remote",
                    caption: {
                        background: { colors: ["#F38181", "#FCE38A"] },
                        icon: { data: "🎀", type: "emoji" },
                        max_lines: 1,
                        text: "Quá nhiều sự dễ thương",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:mac_bay_tinh_yeu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#EE9CA7", "#FFDDE1"] },
                        icon: { data: "💘", type: "emoji" },
                        max_lines: 1,
                        text: "Mắc bẫy tình yêu",
                        text_color: "#000000E6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:song_gio_phu_doi_trai",
                    source: "remote",
                    caption: {
                        background: { colors: ["#3A1C71", "#D76D77"] },
                        icon: { data: "🌪️", type: "emoji" },
                        max_lines: 1,
                        text: "Sóng gió phủ đời trai",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        },
        {
            section: "🌸 Góc Deadline & Đi Làm",
            items: [
                {
                    overlay_id: "caption:deadline_ruot",
                    source: "remote",
                    caption: {
                        background: { colors: ["#ED213A", "#93291E"] },
                        icon: { data: "🔥", type: "emoji" },
                        max_lines: 1,
                        text: "Deadline dí tụt quần",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:tien_dau_ma_tieu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#11998E", "#38EF7D"] },
                        icon: { data: "💸", type: "emoji" },
                        max_lines: 1,
                        text: "Tiền đâu mà tiêu",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
                {
                    overlay_id: "caption:nghien_cuu_khoa_hoc",
                    source: "remote",
                    caption: {
                        background: { colors: ["#0F2027", "#2C5364"] },
                        icon: { data: "☕", type: "emoji" },
                        max_lines: 1,
                        text: "Cần nạp cafein gấp",
                        text_color: "#FFFFFFE6",
                        type: "static_content",
                    },
                },
            ],
        }
    ]);

    // ============================================================
    // NHÓM 6: CAMERA & LIVE PHOTOS
    // ============================================================
    obj.entries.camera_roll = JSON.stringify({
        flash_button: true,
        audio_button: true
    });
    obj.entries.live_photos = JSON.stringify({
        capture: true,
        viewing: true,
        catch_up: true,
        widget_looping_mode: "never",
    });
    obj.entries.camera_roll_preview_enabled = "true";

    // ============================================================
    // NHÓM 7: UPLOAD — chất lượng cao
    // ============================================================
    obj.entries.upload_main = "false";
    obj.entries.upload_main_image_quality = "1.0";
    obj.entries.upload_main_image_size = "1440";
    obj.entries.upload_thumbnail_image_quality = "1.0";
    obj.entries.upload_thumbnail_image_size = "1020";

    // ============================================================
    // NHÓM 8: QR CODE + SEND TO SELF
    // ============================================================
    obj.entries.qr_code_config = JSON.stringify({
        profile_enabled: true,
        scanning_enabled: true,
    });
    obj.entries.send_to_self_only_mode = "always_enabled";

    // ============================================================
    // NHÓM 9: JOURNAL / ACTIVITY BAR
    // ============================================================
    obj.entries.activity_bar_enabled = "true";
    obj.entries.journal_activity_bar_enabled = "true";

    // ============================================================
    // NHÓM 10: PAYWALL — không bao giờ hiện
    // ============================================================
    obj.entries.paywall_presentation_config = JSON.stringify({
        uid: "paywall_testflight",
        onboarding: false,
        after_sent_moment: false,
        on_foreground: false,
        interval: 2592000,
        profile_banner: true,
    });
    obj.entries.android_subscribe_gold_button_enabled = "false";
    obj.entries.profile_badge_visible = "true";
    obj.entries.paywall_config = JSON.stringify({
        uid: "v2_testflight",
        title: { en: "Locket Gold", vi: "Locket Gold" },
        profile_banner_title: {
            en: "Locket Gold @duyvinh09",
            vi: "Locket Gold @duyvinh09",
        },
        completed_title: {
            en: "Welcome to Gold!\nCracked by duyvinh09",
            vi: "Chào mừng bạn đến với Locket Gold!\nCrack bởi duyvinh09",
        },
        primary_features: [
            {
                emoji: "📱",
                title: { en: "Follow on TikTok", vi: "Theo dõi kênh TikTok" },
                subtitle: {
                    en: "Follow @duyvinh.09 on TikTok!",
                    vi: "Theo dõi trang TikTok @duyvinh.09 nha!",
                },
                early_access: true,
            },
            {
                emoji: "🚫",
                title: { en: "Remove ads", vi: "Không có quảng cáo!" },
                subtitle: {
                    en: "Never see an ad in History!",
                    vi: "Không bao giờ nhìn thấy một quảng cáo nào nữa",
                },
            },
            {
                emoji: "🎥",
                title: { en: "Video Lockets", vi: "Video Lockets" },
                subtitle: {
                    en: "Record short video clips!",
                    vi: "Ghi lại các video clip ngắn!",
                },
                early_access: true,
            },
            {
                emoji: "👀",
                title: { en: "Locket views", vi: "Lượt xem Locket" },
                subtitle: {
                    en: "See who's opened your Lockets",
                    vi: "Xem những người đã mở Locket của bạn",
                },
            },
            {
                emoji: "🏞️",
                title: {
                    en: "Upload from camera roll",
                    vi: "Tải lên từ cuộn camera",
                },
                subtitle: {
                    en: "Share memories from your library",
                    vi: "Chia sẻ các kỷ niệm từ thư viện của bạn",
                },
            },
            {
                emoji: "❤️‍🔥",
                title: { en: "Unlimited friends", vi: "Thêm bạn bè tùy ý" },
                subtitle: {
                    en: "Add as many friends as you'd like!",
                    vi: "Thêm bao nhiêu bạn bè tùy ý!",
                },
                early_access: true,
            },
            {
                emoji: "💛",
                title: {
                    en: "Custom app icon",
                    vi: "Biểu tượng ứng dụng tùy chỉnh",
                },
                subtitle: {
                    en: "Decorate your Home Screen",
                    vi: "Trang trí Màn hình chính của bạn",
                },
            },
            {
                emoji: "💬",
                title: { en: "Send longer captions", vi: "Gửi phụ đề dài hơn" },
                subtitle: {
                    en: "Type even more on your photos!",
                    vi: "Điền nhiều nội dung hơn nữa trên các ảnh của bạn!",
                },
            },
        ],
        offering_kind: "prod",
    });

    // ============================================================
    // NHÓM 11: UPSELL FEATURES — bật hết
    // ============================================================
    obj.entries.upsell_features = JSON.stringify({
        app_icon_picker: true,
        camera_roll: true,
        camera_theme: true,
        locket_views: true,
        remove_ads: true,
        custom_widget_frames: true,
    });

    // ============================================================
    // NHÓM 12: STREAK — dễ khôi phục
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config);
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {
        // Nếu parse lỗi, bỏ qua
    }

    // ============================================================
    // NHÓM 13: CHAT — bật đầy đủ
    // ============================================================
    obj.entries.chat_reactions_enabled = "true";
    obj.entries.conversation_reactions = "true";
    obj.entries.typing_indicators_enabled = "true";
    obj.entries.unsend_message_enabled = "true";
    obj.entries.reply_prototype_enabled = "true";

    // ============================================================
    // NHÓM 14: TÍNH NĂNG MỚI (từ file testflight)
    // ============================================================
    obj.entries.blocked_users_cached_sync_enabled = "true";
    obj.entries.keychain_access_retries = "true";
    obj.entries.refresh_interval = "60";
    obj.entries.firestore_refresh_v2 = "true";
    obj.entries.firestore_refresh_v3 = "true";
    obj.entries.beta_features_enabled = "true";
    obj.entries.join_testflight_enabled = "true";
    obj.entries.groups_enabled = "true";
    obj.entries.journal_settings = JSON.stringify({
        debug_menu_enabled: false,
        focus_animation: true,
        compact_header: true,
        friends_button: true,
        reverse_scroll_direction: false,
        streak_visualization: true,
        streak_visualization_style: "gradient",
        streak_header_minimum_count: 0,
        streak_visualization_minimum_count: 2,
        overlay_indicators: {
        location: true,
        music: true,
        static_content: true,
        weather: true,
        },
    });
    obj.entries.journal_activity_bar_enabled = "true";

    // ============================================================
    // NHÓM 15: SENTRY — giảm log
    // ============================================================
    obj.entries.sentry_sample_rate = "0";
    obj.entries.sentry_network_tracing = "false";
    obj.entries.sentry_performance_tracking = "false";
    obj.entries.sentry_trace_sample_rate = "0";
    obj.entries.sentry_profiles_sample_rate = "0";

    // ============================================================
    // NHÓM 16: CACHE — tăng thời gian cache
    // ============================================================
    obj.entries.image_cache_max_age_sec = "157680000";
    obj.entries.image_cache_max_size = "400000000";
    obj.entries.history_cache_age_days = "1000";
    obj.entries.user_cache_max_age_sec = "691200";
    obj.entries.friends_cache_max_age_sec = "2592000";

    // ============================================================
    // NHÓM 17: LOCKET COUNT CONFIG — emoji đếm Locket (MỚI THÊM)
    // ============================================================
    obj.entries.friends_sheet_locket_count_config = JSON.stringify({
        items: [
        { threshold: 0, icon_name: "heart" },
        { threshold: 1, icon_name: "heart.fill" },
        { threshold: 10, emoji: "🤍" },
        { threshold: 100, emoji: "💛" },
        { threshold: 500, emoji: "❤️‍🔥" },
        { threshold: 1000, emoji: "🌟🫶🌟" },
        { threshold: 2000, emoji: "✨💟✨" },
        { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
        { threshold: 10000, emoji: "✨⚡️😱⚡✨" },
        ],
    });

    obj.entries.friend_locket_count_config = JSON.stringify({
        items: [
        { threshold: 0, icon_name: "heart" },
        { threshold: 1, icon_name: "heart.fill" },
        { threshold: 10, emoji: "🤍" },
        { threshold: 100, emoji: "💛" },
        { threshold: 500, emoji: "❤️‍🔥" },
        { threshold: 1000, emoji: "✨💗✨" },
        { threshold: 2000, emoji: "✨️⭐️✨" },
        { threshold: 5000, emoji: "✨💎✨" },
        { threshold: 10000, emoji: "✨🔐💛✨" },
        ],
    });

    // ============================================================
    // NHÓM 18: ROLLCALL — bật đầy đủ (MỚI THÊM)
    // ============================================================
    obj.entries.rollcall_enabled = "true";
    obj.entries.rollcall_comment_actions = "true";
    obj.entries.rollcall_profile_button = "true";
    obj.entries.rollcall_prompt_export_after_share = "true";
    obj.entries.rollcall_confirm_skip_tagging = "false";
    obj.entries.rollcall_tap_to_tag_enabled = "false";

    // ============================================================
    // NHÓM 19: LIVE ACTIVITY (MỚI THÊM)
    // ============================================================
    obj.entries.live_activity_onboarding = "true";
    obj.entries.live_activity_onboarding_variant = "friending";
    obj.entries.register_live_activity_push_to_start_token = "true";
    obj.entries.live_activity_remove_stale_start_token = "true";
    obj.entries.notification_preferences_live_activities = "true";

    // ============================================================
    // NHÓM 20: NOTIFICATION (MỚI THÊM)
    // ============================================================
    obj.entries.notification_preferences = "true";
    obj.entries.notification_reply_body_visible = "true";
    obj.entries.prompt_notification_permissions_after_friending = "true";

    // ============================================================
    // NHÓM 21: WIDGET (MỚI THÊM)
    // ============================================================
    obj.entries.widget_badge_enabled = "true";
    obj.entries.widget_badge_v2 = "true";
    obj.entries.widget_stale_state_enabled = "false";
    obj.entries.widget_last_sent_indicator = "false";
    obj.entries.widget_sync_token_reload_mode = "clearTokenNever";
    obj.entries.widget_frame_event = JSON.stringify({
        uid: "duyvinh09",
        url: "https://public.locketcamera.com/locket-public/widget_frames/midautumn_2026/midautumn_2026.png",
        use_local_time_zone: true,
        placement: "below",
        start_at: "2005-09-15T00:00:00Z",
        end_at: "2999-09-30T23:59:59Z",
    });

    // ============================================================
    // NHÓM 22: CDN & STORAGE (MỚI THÊM)
    // ============================================================
    obj.entries.cdn_domain_replacements = JSON.stringify({
        "firebasestorage.googleapis.com": "cdn.locketcamera.com",
    });
    obj.entries.cdn_domain_replacements_video = "true";
    obj.entries.storage_bucket = "gs://locket-img";
    obj.entries.storage_bucket_video = "gs://locket-video";

    // ============================================================
    // NHÓM 23: TÍNH NĂNG KHÁC — bật thêm (MỚI THÊM)
    // ============================================================
    obj.entries.invite_link_preview_variant = "4";
    obj.entries.zoom_enabled = "true";
    obj.entries.time_travel_rewind_v2_enabled = "true";
    obj.entries.calendar_delete_moment_enabled = "true";
    obj.entries.calendar_rewind_enabled = "false";
    obj.entries.custom_profile_pics = "true";
    obj.entries.profile_menu_v2_enabled = "true";
    obj.entries.safety_center = "true";
    obj.entries.help_center = "true";
    obj.entries.support_v2 = "true";
    obj.entries.lunar_new_year_app_icon_enabled = "true";
    obj.entries.locket_yearbook_story_sharing_encouraged = "true";
    obj.entries.fetch_moments_in_conversation = "true";
    obj.entries.new_friends_monitoring_enabled = "true";
    obj.entries.improved_friend_suggestions = "true";
    obj.entries.show_friend_suggestions_by_default = "true";
    obj.entries.emoji_friend_suggestions = "true";
    obj.entries.prompt_contact_permissions_on_search = "true";
    obj.entries.populate_phone_numbers_from_suggest_friends = "true";
    obj.entries.privacy_choices_setting = "true";
    obj.entries.request_att_permission = "true";
    obj.entries.share_history_config = JSON.stringify({
        prompt_enabled: false,
        fetching_enabled: true,
    });
    obj.entries.share_history_prompt_enabled = "false";
    obj.entries.use_thumbnails_for_sharing = "true";
    obj.entries.use_thumbnails_in_timeline = "true";
    obj.entries.camera_roll_preview_enabled = "true";
    obj.entries.messages_integration = "true";
    obj.entries.conversations_enabled = "true";
    obj.entries.fetch_users_from_cloud_function = "true";
    obj.entries.get_latest_moment_v2 = "true";
    obj.entries.timestamp_based_history_fetches = "true";
    obj.entries.efficient_history_cache_invalidation = "true";
    obj.entries.image_fetch_cache = "true";
    obj.entries.image_cache_use_shared = "true";
    obj.entries.use_doc_dir_for_image_cache = "true";
    obj.entries.hide_friends_enabled = "true";
    obj.entries.hide_chat_button = "false";
    obj.entries.hide_invite_links = "false";
    obj.entries.hide_skip_contacts = "true";
    obj.entries.show_all_contacts = "true";
    obj.entries.show_invite_suggestions = "true";
    obj.entries.show_no_friends_bottom_sheet = "false";
    obj.entries.signup_allow_skip_add_friends = "true";
    obj.entries.persist_onboarding_step = "true";
    obj.entries.onboarding_contact_permission_step = "true";
}

$done({ body: JSON.stringify(obj) });