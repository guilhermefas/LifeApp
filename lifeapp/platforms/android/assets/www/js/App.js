/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function App(){
    // Application Constructor
    this.initialize = function initialize() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    this.onDeviceReady = function onDeviceReady() {
        this.receivedEvent('deviceready');
    };
    
    // Update DOM on a Received Event
    this.receivedEvent = function receivedEvent(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        var pixelRatio = window.devicePixelRatio || 1;
        var windowWidth = window.innerWidth * pixelRatio;
        var windowHeight = window.innerHeight * pixelRatio;

        var canvas = $("#app");
        $(canvas).width(5).height(5);

        while($(canvas).width() < windowWidth)
            $(canvas).width($(canvas).width() << 1);
        $(canvas).width($(canvas).width() >> 1);
        
        while($(canvas).height() < windowHeight)
            $(canvas).height($(canvas).height() << 1);
        $(canvas).height($(canvas).height() >> 1);
        
        $(canvas).css({
            'margin': ((window.innerHeight - $(canvas).height()) >> 1) + 'px auto 0',
            background: '#fff',
            'border-radius': '10px'
        });
        
        $('.grid').width(canvas.width);
        var grids = $('.grid');
        var i;
        for(i = 0; i < grids.length; i++)
            new Grid($('.grid')[i]);
    };
};
