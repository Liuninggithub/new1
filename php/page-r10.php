<?php
	require_once "header2.php";
?>

			<!--导航栏下的次级导航-->
			<div class="lyf-next-url">
				<span class="lyf-next-url-span1">普嘉国际有限公司</span>&nbsp;&nbsp;</span><span class="lyf-next-url-span4">>&nbsp;</span><span class="lyf-next-url-span2">加入我们</span><span class="lyf-next-url-span3">
			</div>
			<!--导航栏下方带背景div-->
			<div class="lyf-contbg">
				<span>加入我们</span>
			</div>
			<!--下方总div-->
			<div class="lyf-bottomall">
				<!--吴浩然的 加入我们里的内容-->
					<div class="mumin-mainleft leftthree">
						<div class="mumin-mainlefttwo">
							<p><img src="../images/日历.png"/>March 20, 2016 <img src="../images/用户.png"/> bogaint</p>
						</div>
						<p>请先上载你的个人履历表然后把你个人资料和有兴趣的职位填下:</p>
						<table class="mumin-bordered">
							<thead>
								<tr>
									<td>职位</td>
									<td>部门</td>
									<td>地点</td>
									<td>职位要求</td>
									<td>经验</td>
								</tr>
							</thead>
							<tr>
								<td>Web前端开发工程师</td>
								<td>I.T.</td>
								<td>广州</td>
								<td>大专以上</td>
								<td>3-5年</td>
							</tr>
							<tr>
								<td>Android前端开发工程师</td>
								<td>I.T.</td>
								<td>广州</td>
								<td>大专以上</td>
								<td>3-5年</td>
							</tr>
							<tr>
								<td>IOS 开发工程师</td>
								<td>I.T.</td>
								<td>广州</td>
								<td>大专以上</td>
								<td>3-5年</td>
							</tr>
							<tr>
								<td>室内设计师</td>
								<td>I.T.</td>
								<td>广州</td>
								<td>大专以上</td>
								<td>3-5年</td>
							</tr>
						</table>
						<p>把你的履历表上载:</p>
						<!--<div class="upload"></div>-->
						<input type="text" name="upload" id="mumin-upload" value="" />
						<button class="mumin-mybtn">选择文件</button>
						<button class="mumin-mybtn" disabled="true">上载</button>
						<p class="mumin-name">姓</p>
						<input type="text" name="inputone" id="mumin-inputone" placeholder="姓" />
						<p class="mumin-name">名字</p>
						<input type="text" name="inputone" id="mumin-inputone" placeholder="名字" />
						<p class="mumin-name">地址</p>
						<input type="text" name="inputone" id="mumin-inputone" placeholder="地址" />
						<p class="mumin-name">Email</p>
						<input type="text" name="inputone" id="mumin-inputone" placeholder="123456@qq.com" />
						<p class="mumin-name">联系电话</p>
						<input type="text" name="inputone" id="mumin-inputone" placeholder="1234567" />
						<p class="mumin-name">工作职位</p>
						<input type="text" name="inputone" id="mumin-inputone" placeholder="工作职位" />
						<button class="mumin-mybtntwo">提交</button>
					</div>
				<!--未上线网站结束-->
				<?php
					require_once "content-r.php";
				?>
			</div>






<script type="text/javascript">
	$(function(){
			$(".header-ul li").eq(6).addClass("wang222");
		})
</script>

<?php
	require_once "footer2.php";
?>	