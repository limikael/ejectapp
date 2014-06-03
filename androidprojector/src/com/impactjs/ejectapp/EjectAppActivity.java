package com.impactjs.ejectapp;

import android.util.Log;
import android.app.Activity;
import android.content.res.Configuration;
import android.opengl.GLSurfaceView;
import android.os.Bundle;

import com.impactjs.ejecta.EjectaRenderer;
import com.impactjs.ejecta.EjectaGLSurfaceView;

public class EjectAppActivity extends Activity {
	private GLSurfaceView mGLView;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        Log.d("ejecta","************ creating activity");
		int width = getWindowManager().getDefaultDisplay().getWidth();
		int height = getWindowManager().getDefaultDisplay().getHeight();
	    mGLView = new EjectaGLSurfaceView(this, width, height);
        setContentView(mGLView);

        ((EjectaGLSurfaceView)mGLView).setEjectaEventListener(new EjectaRenderer.EjectaEventListener() {
            @Override
            public void onCanvasCreated() {
                Log.d("ejecta", "Event: Canvas was created");
                ((EjectaGLSurfaceView)mGLView).loadJavaScriptFile("ejecta.js");

                String jsEntryFile=getResources().getString(R.string.js_entry_file);
                Log.d("ejecta", "Loading entry javascript: "+jsEntryFile);

                ((EjectaGLSurfaceView)mGLView).loadJavaScriptFile(jsEntryFile);
            }
        });
	}

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        // TODO Auto-generated method stub
        super.onConfigurationChanged(newConfig);
    }

	@Override
	protected void onDestroy() {
        Log.d("ejecta","************ destroying activity");

		// TODO Auto-generated method stub
		((EjectaGLSurfaceView)mGLView).onDestroy();
		super.onDestroy();
        System.exit(0);
	}

	static {
    	System.loadLibrary("JavaScriptCore");
        System.loadLibrary("ejecta");
    }
}
