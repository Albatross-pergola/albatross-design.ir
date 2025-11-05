(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"layout":"absolute","class":"Player","minHeight":0,"minWidth":0,"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false},"name":"Player531","locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{}},"backgroundColor":["#FFFFFF"],"start":"this.init()","gap":10,"scrollBarMargin":2,"scripts":{"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clone":TDV.Tour.Script.clone,"setLocale":TDV.Tour.Script.setLocale,"openLink":TDV.Tour.Script.openLink,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showWindow":TDV.Tour.Script.showWindow,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPixels":TDV.Tour.Script.getPixels,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playAudioList":TDV.Tour.Script.playAudioList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"historyGoBack":TDV.Tour.Script.historyGoBack,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"shareSocial":TDV.Tour.Script.shareSocial,"getMainViewer":TDV.Tour.Script.getMainViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlays":TDV.Tour.Script.getOverlays,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setValue":TDV.Tour.Script.setValue,"enableVR":TDV.Tour.Script.enableVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"init":TDV.Tour.Script.init,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"cloneBindings":TDV.Tour.Script.cloneBindings,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeJS":TDV.Tour.Script.executeJS,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"disableVR":TDV.Tour.Script.disableVR,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"toggleVR":TDV.Tour.Script.toggleVR,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizStart":TDV.Tour.Script.quizStart,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"registerKey":TDV.Tour.Script.registerKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizFinish":TDV.Tour.Script.quizFinish,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"translate":TDV.Tour.Script.translate,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"createTween":TDV.Tour.Script.createTween,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"textToSpeech":TDV.Tour.Script.textToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot},"defaultMenu":["fullscreen","mute"],"propagateClick":false,"height":"100%","backgroundColorRatios":[0],"width":"100%","scrollBarColor":"#000000","hash": "c96068d8fc5b1cf7bd343d231e4307195dfbd6f31ff2f6f111647e1fdb713e1b", "definitions": [{"class":"PhotoAlbumPlayer","id":"MainViewerPhotoAlbumPlayer","viewerArea":"this.MainViewer"},{"data":{"label":"Photo Album 052037B"},"thumbnailUrl":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_t.png","label":trans('album_6EFC88D2_6104_9D37_41AF_54E024766875.label'),"id":"album_6EFC88D2_6104_9D37_41AF_54E024766875","class":"PhotoAlbum","playList":"this.album_6EFC88D2_6104_9D37_41AF_54E024766875_AlbumPlayList"},{"data":{"label":"052072B"},"width":741,"thumbnailUrl":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_2_t.jpg","height":492,"image":{"class":"ImageResource","levels":[{"url":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_2.jpg","class":"ImageResourceLevel"}]},"label":trans('album_6EFC88D2_6104_9D37_41AF_54E024766875_2.label'),"class":"Photo","duration":5000,"id":"album_6EFC88D2_6104_9D37_41AF_54E024766875_2"},{"data":{"label":"052063B"},"width":737,"thumbnailUrl":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_1_t.jpg","height":491,"image":{"class":"ImageResource","levels":[{"url":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_1.jpg","class":"ImageResourceLevel"}]},"label":trans('album_6EFC88D2_6104_9D37_41AF_54E024766875_1.label'),"class":"Photo","duration":5000,"id":"album_6EFC88D2_6104_9D37_41AF_54E024766875_1"},{"id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","media":"this.album_6EFC88D2_6104_9D37_41AF_54E024766875","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer"}],"class":"PlayList"},{"toolTipPaddingBottom":4,"minHeight":50,"subtitlesBottom":50,"minWidth":100,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"subtitlesBackgroundColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"toolTipFontSize":"1.11vmin","progressBackgroundColor":["#000000"],"firstTransitionDuration":0,"playbackBarHeadShadowBlurRadius":3,"progressBottom":10,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"propagateClick":false,"toolTipShadowColor":"#333138","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressBorderSize":0,"progressRight":"33%","progressHeight":2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressOpacity":0.7,"progressBarBorderRadius":2,"playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","class":"ViewerArea","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorDirection":"horizontal","toolTipFontColor":"#606060","toolTipPaddingLeft":6,"subtitlesFontColor":"#FFFFFF","id":"MainViewer","playbackBarBottom":5,"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarBorderSize":0,"progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"vrThumbstickRotationStep":20,"progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadWidth":6,"progressBorderRadius":2,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","playbackBarProgressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","width":"100%","vrPointerSelectionTime":2000,"playbackBarBackgroundOpacity":1,"height":"100%","subtitlesGap":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000"},{"data":{"label":"052037B"},"width":736,"thumbnailUrl":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_0_t.jpg","height":498,"image":{"class":"ImageResource","levels":[{"url":"media/album_6EFC88D2_6104_9D37_41AF_54E024766875_0.jpg","class":"ImageResourceLevel"}]},"label":trans('album_6EFC88D2_6104_9D37_41AF_54E024766875_0.label'),"class":"Photo","duration":5000,"id":"album_6EFC88D2_6104_9D37_41AF_54E024766875_0"},{"id":"album_6EFC88D2_6104_9D37_41AF_54E024766875_AlbumPlayList","items":[{"camera":{"scaleMode":"fit_outside","targetPosition":{"y":0.27,"x":0.67,"class":"PhotoCameraPosition","zoomFactor":1.1},"initialPosition":{"class":"PhotoCameraPosition"},"duration":5000,"class":"MovementPhotoCamera"},"media":"this.album_6EFC88D2_6104_9D37_41AF_54E024766875_0","class":"PhotoPlayListItem"},{"camera":{"scaleMode":"fit_outside","targetPosition":{"y":0.36,"x":0.59,"class":"PhotoCameraPosition","zoomFactor":1.1},"initialPosition":{"class":"PhotoCameraPosition"},"duration":5000,"class":"MovementPhotoCamera"},"media":"this.album_6EFC88D2_6104_9D37_41AF_54E024766875_1","class":"PhotoPlayListItem"},{"camera":{"scaleMode":"fit_outside","targetPosition":{"y":0.56,"x":0.26,"class":"PhotoCameraPosition","zoomFactor":1.1},"initialPosition":{"class":"PhotoCameraPosition"},"duration":5000,"class":"MovementPhotoCamera"},"media":"this.album_6EFC88D2_6104_9D37_41AF_54E024766875_2","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Sat Aug 17 2024